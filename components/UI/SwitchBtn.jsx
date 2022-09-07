import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SwitchBtn({ id, isActivated, changeAlarm }) {
	return (
		<View className='mt-6 pr-4'>
			<TouchableOpacity onPress={() => changeAlarm(id)}>
				{isActivated === false ? (
					<Image
						source={require('../../assets/swfalse.png')}
						className='w-14 h-14'
					/>
				) : (
					<Image
						source={require('../../assets/swtrue.png')}
						className='w-14 h-14'
					/>
				)}
			</TouchableOpacity>
		</View>
	)
}
