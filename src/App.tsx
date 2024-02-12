import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { Routes } from './main/res/presentation/routes';

function App() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}

export default registerRootComponent(App);
