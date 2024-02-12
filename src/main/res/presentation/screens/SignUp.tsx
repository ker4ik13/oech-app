import { useForm } from 'react-hook-form';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { CustomButton } from '../components/ui/CustomButton';
import { DefaultScreenProps } from '../routes';

interface Inputs {
	fullName: string;
	phone: number;
	email: string;
	password: string;
	confirmPassword: string;
}

export const SignUp = ({ navigation }: DefaultScreenProps) => {
	const {
		register,
		formState: { errors, isValid },
	} = useForm<Inputs>();

	return (
		<ScrollView style={styles.scrollContainer}>
			<SafeAreaView style={styles.container}>
				<StatusBar />
				<Text style={styles.title}>Create an account</Text>
				<Text style={styles.subtitle}>
					Complete the sign up process to get started
				</Text>
				<View style={styles.form}>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Full Name</Text>
						<TextInput
							placeholder='Ivanov Ivan'
							style={styles.input}
							autoCorrect={false}
							{...register('fullName', {
								required: true,
							})}
						/>
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Phone Number</Text>
						<TextInput
							placeholder='+7(999)999-99-99'
							style={styles.input}
							autoCorrect={false}
							keyboardType='numeric'
							{...register('phone', {
								required: true,
							})}
						/>
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Email Address</Text>
						<TextInput
							placeholder='***********@mail.com'
							style={styles.input}
							autoCorrect={false}
							textContentType='emailAddress'
							keyboardType='email-address'
							{...register('email', {
								required: true,
							})}
						/>
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Password</Text>
						<TextInput
							placeholder='**********'
							secureTextEntry
							style={styles.input}
							autoCorrect={false}
							{...register('password', {
								required: true,
								minLength: 8,
							})}
						/>
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Confirm Password</Text>
						<TextInput
							placeholder='**********'
							secureTextEntry
							style={styles.input}
							autoCorrect={false}
							{...register('password', {
								required: true,
								minLength: 8,
							})}
						/>
					</View>
				</View>
				<View style={styles.buttonsVertical}>
					<CustomButton.Solid
						title='Sign Up'
						size='md'
						onPress={() => navigation.navigate('holder')}
					/>
					{/* <CustomButton.Solid title="Sign Up" size="md" onPress={() => navigation.navigate('holder')} disabled={!isValid} /> */}
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
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 30,
		paddingHorizontal: 24,
		paddingBottom: 30,
	},
	title: {
		fontSize: 24,
		color: '#000',
		fontWeight: '500',
	},
	subtitle: {
		marginTop: 8,
		fontSize: 14,
		color: '#A7A7A7',
		fontWeight: '500',
	},
	form: {
		marginTop: 30,
		gap: 24,
		width: '100%',
	},
	inputWrapper: {
		gap: 8,
	},
	label: {
		fontSize: 14,
		fontWeight: '500',
		color: '#A7A7A7',
	},
	input: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#A7A7A7',
		paddingHorizontal: 10,
		paddingVertical: 14,
		fontWeight: '500',
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
