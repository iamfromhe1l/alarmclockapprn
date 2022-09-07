export const changeAlarmHook = async (id, alarms, setAlarms) => {
	const copyAlarm = [...alarms]
	const alarmForChange = copyAlarm.find(e => e._id === id)
	alarmForChange.isActivated = !alarmForChange.isActivated
	setAlarms(copyAlarm)
}
