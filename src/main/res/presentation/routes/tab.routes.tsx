import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Onboarding, SignIn, SignUp } from '../screens';

export type RootStackParamList = {
	onboarding1: undefined;
	onboarding2: undefined;
	onboarding3: undefined;
	holder: undefined;
	signin: undefined;
	signup: undefined;
};
export type DefaultScreenProps = NativeStackScreenProps<RootStackParamList>;

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabRoutes = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='onboarding1'
				component={Onboarding.First}
				options={{
					tabBarLabel: 'Hello',
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name='balloon' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='signin'
				component={SignIn}
				options={{
					tabBarLabel: 'Sign in',
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name='log-in' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='signup'
				component={SignUp}
				options={{
					tabBarLabel: 'Sign up',
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons name='log-in-outline' color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
