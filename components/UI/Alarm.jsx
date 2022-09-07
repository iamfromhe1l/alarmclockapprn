import { View, Text } from 'react-native'
import React from 'react'
import SwitchBtn from './SwitchBtn'

export default function Alarm({ alarm, changeAlarm }) {
	return (
		<View>
			<View className='w-full rounded-xl bg-slate-100 flex-row justify-between mb-4'>
				<View className='m-2'>
					<Text style={{ fontFamily: 'AlarmTime' }} className='p-2 text-7xl'>
						{alarm.alarmTime}
					</Text>
					<Text className=' pb-1 pl-2'>{alarm.description}</Text>
				</View>
				<SwitchBtn
					key={alarm._id}
					id={alarm._id}
					isActivated={alarm.isActivated}
					changeAlarm={changeAlarm}
				/>
			</View>
			<View className='flex justify-center items-center'>
				<View
					style={{ height: 1, backgroundColor: '#c9c9c9' }}
					className='flex-1 mb-4 rounded-3xl w-4/5'
				/>
			</View>
		</View>
	)
}
