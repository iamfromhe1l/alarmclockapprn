import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

function addZero(elem) {
	return String(elem).length === 1 ? `0${elem}` : elem
}

async function getTime() {
	const nowTime = new Date()
	const hours = addZero(nowTime.getHours())
	const minutes = addZero(nowTime.getMinutes())
	return `${hours}:${minutes}`
}

const NowTime = () => {
	const [now, setNow] = useState(getTime()['_3'])
	useEffect(() => {
		setInterval(() => {
			const time = setNow(getTime()['_3'])
		}, 1000)
	})
	return (
		<Text
			style={{ fontFamily: 'Junegull' }}
			className=' text-9xl text-neutral-800 p-2'
		>
			{now}
		</Text>
	)
}

export default NowTime
