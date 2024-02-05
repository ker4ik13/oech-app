import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding2 } from './presentation/screen/Onboarding/Onboarding2';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Onboarding1'
					options={{ headerShown: false }}
					component={Onboarding2}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
