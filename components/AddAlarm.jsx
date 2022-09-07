import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
} from 'react-native'
import React, { useState } from 'react'
import TopAddAlarmNavbar from './UI/TopAddAlarm'
import { TailwindProvider } from 'tailwindcss-react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

function getTimeWithZero(date) {
	const hours = date.getHours()
	const hoursZ = String(hours).length === 1 ? `0${hours}` : hours
	const minutes = date.getMinutes()
	const minutesZ = String(minutes).length === 1 ? `0${minutes}` : minutes
	return `${hoursZ}:${minutesZ}`
}

export default function AddAlarm({ navigation, route }) {
	const [text, setText] = useState('asfsfa')
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('date')
	const [show, setShow] = useState(false)

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate
		setShow(false)
		setDate(currentDate)
	}

	const showMode = currentMode => {
		if (Platform.OS === 'android') {
			setShow(true)
		}
		setMode(currentMode)
	}

	const showDatepicker = () => {
		showMode('date')
	}

	const showTimepicker = () => {
		showMode('time')
	}
	return (
		<TailwindProvider>
			<View className='h-full bg-white'>
				<TopAddAlarmNavbar navigation={navigation} />
				<View>
					<View className='mt-4 flex flex-row justify-evenly items-center w-full'>
						<View className='flex pl-3 w-80'>
							<TouchableOpacity onPress={showTimepicker}>
								<View className=' border-2 border-zinc-100 flex justify-center items-center p-2 bg-zinc-100 rounded-xl h-24 w-2/4'>
									<Text className='text-3xl font-light text-center'>
										Choose time
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View className='h-full w-0.5 bg-gray-700'></View>
						<Text
							style={{ fontFamily: 'Junegull' }}
							className='text-5xl p-2 pl-8'
						>
							{getTimeWithZero(date)}
						</Text>
						{show && (
							<DateTimePicker
								testID='dateTimePicker'
								value={date}
								mode={mode}
								is24Hour={true}
								onChange={onChange}
								minimumDate={new Date(new Date().getTime() + 5 * 60000)}
								maximumDate={new Date(2300, 10, 20)}
							/>
						)}
					</View>
				</View>
				<View className='flex justify-center items-center mt-16'>
					<TextInput
						onChangeText={setText}
						value={text}
						placeholder='Description'
						className=' h-16 w-3/4 bg-slate-100 rounded-xl text-center'
					/>
				</View>

				<View className='flex-1 justify-end items-center mb-10'>
					<TouchableOpacity
						onPress={async () =>
							await route.params.addAlarm([
								{
									_id: date.toDateString(),
									alarmTime: getTimeWithZero(date),
									description: text,
									isActivated: true,
								},
							])
						}
					>
						<View className='border-2 border-zinc-900 flex justify-center items-center p-2 bg-zinc-900 rounded-xl h-24 w-80'>
							<Text className='text-white text-3xl font-light text-center'>
								Add Alarm
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</TailwindProvider>
	)
}
