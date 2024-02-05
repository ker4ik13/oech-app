import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { Indicators } from '../../components/Indicators';
import { StyledButton } from '../../components/StyledButton';

const onboardingImg1 = require('../../../drawable/onboarding2.png');

export const Onboarding2 = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='default' />
			<Image source={onboardingImg1} style={styles.image} />
			<Indicators activeIndex={1} count={3} />
			<View style={styles.buttons}>
				<StyledButton.Outlined size='sm' title='Skip' />
				<StyledButton.Solid size='sm' title='Next' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 100,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		maxHeight: 350,
		aspectRatio: '1/1',
		resizeMode: 'center',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		marginTop: 65,
	},
});
