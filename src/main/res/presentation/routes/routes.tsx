import {
	NativeStackScreenProps,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Holder, Onboarding, SignIn, SignUp } from '../screens';

export type RootStackParamList = {
	onboarding1: undefined;
	onboarding2: undefined;
	onboarding3: undefined;
	holder: undefined;
	signin: undefined;
	signup: undefined;
};
export type DefaultScreenProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: 'fade_from_bottom',
			}}
			initialRouteName='onboarding1'
		>
			<Stack.Screen name='onboarding1' component={Onboarding.First} />
			<Stack.Screen name='onboarding2' component={Onboarding.Second} />
			<Stack.Screen name='onboarding3' component={Onboarding.Third} />
			<Stack.Screen name='signin' component={SignIn} />
			<Stack.Screen name='signup' component={SignUp} />
			<Stack.Screen name='holder' component={Holder} />
		</Stack.Navigator>
	);
};
