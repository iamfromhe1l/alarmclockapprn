import { View } from 'react-native'
import NowTime from './UI/NowTime'
import TopNavbar from './UI/TopNavbar'
import { TailwindProvider } from 'tailwindcss-react-native'

export default function Home({ navigation }) {
	return (
		<TailwindProvider>
			<TopNavbar navigation={navigation} />
			<View className='flex-1 items-center justify-center bg-white'>
				<NowTime />
			</View>
		</TailwindProvider>
	)
}
