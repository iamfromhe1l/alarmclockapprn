import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import Alarms from './components/Alarms'
import AddAlarm from './components/AddAlarm'

const fetchFonts = async () =>
	await Font.loadAsync({
		// prettier-ignore
		'Junegull': require('./assets/fonts/OpenSans-Light.ttf'),
		AlarmTime: require('./assets/fonts/gothic.ttf'),
	})
const Stack = createNativeStackNavigator()

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false)

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={err => console.log(err)}
			/>
		)
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ title: 'Home', headerShown: false }}
				/>
				<Stack.Screen
					name='Alarms'
					component={Alarms}
					options={{ title: 'Alarms', headerShown: false }}
				/>
				<Stack.Screen
					name='AddAlarm'
					component={AddAlarm}
					options={{ title: 'AddAlarm', headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
