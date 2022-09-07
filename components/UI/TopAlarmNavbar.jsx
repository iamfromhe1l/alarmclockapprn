import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function TopAlarmNavbar({ navigation, addAlarmHook }) {
	return (
		<View className='w-full pt-16 flex flex-row justify-between pl-4 pr-4 bg-white'>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<View className='border-2 border-zinc-200 flex justify-center items-center p-2 bg-zinc-100 rounded-xl'>
					<Image
						source={require('../../assets/back.png')}
						className='w-5 h-5'
					/>
				</View>
			</TouchableOpacity>
			<Text className='font-bold text-5xl'>Alarms</Text>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('AddAlarm', { addAlarm: addAlarmHook })
				}
			>
				<View className='border-2 border-zinc-200 flex justify-center items-center p-2 bg-zinc-100 rounded-xl'>
					<Image
						source={require('../../assets/plus.png')}
						className='w-5 h-5'
					/>
				</View>
			</TouchableOpacity>
		</View>
	)
}
