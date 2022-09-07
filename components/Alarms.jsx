import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'
import Alarm from './UI/Alarm'
import TopAlarmNavbar from './UI/TopAlarmNavbar'
import { changeAlarmHook } from './hooks/ChangeAlarmHook'
import data from '../alarms.json'
import { addAlarmHook } from './hooks/AddAlarmHook'

export default function Alarms({ navigation }) {
	const [alarms, setAlarms] = useState(data)
	const changeAlarm = id => changeAlarmHook(id, alarms, setAlarms)
	const addAlarm = async alarm => await addAlarmHook(alarm, alarms, setAlarms)

	return (
		<TailwindProvider>
			<View className='h-full bg-white'>
				<TopAlarmNavbar navigation={navigation} addAlarmHook={addAlarm} />
				<View className='w-full pt-10 pl-4 pr-4'>
					{alarms.map(alarm => {
						return <Alarm alarm={alarm} changeAlarm={changeAlarm} />
					})}
				</View>
			</View>
		</TailwindProvider>
	)
}
