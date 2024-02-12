import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/ui';
import { DefaultScreenProps } from '../routes';

const img1 = require('../../../../../assets/onboarding/onb1.png');
const img2 = require('../../../../../assets/onboarding/onb2.png');
const img3 = require('../../../../../assets/onboarding/onb3.png');

export const Onboarding = {
	First: ({ navigation }: DefaultScreenProps) => (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.contentContainer}>
				<Image source={img1} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Quick Delivery At Your Doorstep</Text>
				<Text style={styles.subtitle}>
					Enjoy quick pick-up and delivery to your destination
				</Text>
			</View>
			<View style={styles.buttons}>
				<CustomButton.Solid
					title='Skip'
					size='sm'
					onPress={() => navigation.navigate('holder')}
				/>
				<CustomButton.Outlined
					title='Next'
					size='sm'
					onPress={() => navigation.navigate('onboarding2')}
				/>
			</View>
		</SafeAreaView>
	),
	Second: ({ navigation }: DefaultScreenProps) => (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.contentContainer}>
				<Image source={img2} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Flexible Payment</Text>
				<Text style={styles.subtitle}>
					Different modes of payment either before and after delivery without
					stress
				</Text>
			</View>
			<View style={styles.buttons}>
				<CustomButton.Solid
					title='Skip'
					size='sm'
					onPress={() => navigation.navigate('holder')}
				/>
				<CustomButton.Outlined
					title='Next'
					size='sm'
					onPress={() => navigation.navigate('onboarding3')}
				/>
			</View>
		</SafeAreaView>
	),
	Third: ({ navigation }: DefaultScreenProps) => (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.contentContainer}>
				<Image source={img3} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Real-time Tracking</Text>
				<Text style={styles.subtitle}>
					Track your packages/items from the comfort of your home till final
					destination
				</Text>
			</View>
			<View style={styles.buttonsVertical}>
				<CustomButton.Solid
					title='Sign Up'
					size='md'
					onPress={() => navigation.navigate('signup')}
				/>
				<Text style={styles.alreadyText}>
					Already have an account?
					<Text
						onPress={() => navigation.navigate('holder')}
						style={styles.link}
					>
						{' '}
						Sign in
					</Text>
				</Text>
			</View>
		</SafeAreaView>
	),
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
		paddingBottom: 60,
	},
	contentContainer: {
		paddingTop: 60,
		flexDirection: 'column',
		alignItems: 'center',
	},
	image: {
		aspectRatio: '1/1',
		width: '100%',
		height: 'auto',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	textContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		marginTop: 50,
		maxWidth: 290,
		fontSize: 24,
		color: '#0560FA',
		fontWeight: '700',
		textAlign: 'center',
	},
	subtitle: {
		color: '#3A3A3A',
		fontSize: 16,
		lineHeight: 20,
		marginTop: 5,
		textAlign: 'center',
	},
	buttons: {
		marginTop: 80,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonsVertical: {
		marginTop: 80,
		width: '100%',
		gap: 20,
		flexDirection: 'column',
	},
	alreadyText: {
		textAlign: 'center',
		fontSize: 14,
		color: '#A7A7A7',
	},
	link: {
		fontWeight: '500',
		color: '#0560FA',
	},
});
