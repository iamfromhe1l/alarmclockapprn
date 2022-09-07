export const addAlarmHook = async (alarm, alarms, setAlarm) => {
	await setAlarm([...alarms, ...alarm])
}
