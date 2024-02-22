import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import * as Yup from 'yup';
import { COLORS } from '../../../values';
import { Input } from '../../components/ui';
import { CustomButton } from '../../components/ui/CustomButton';
import { DefaultScreenProps } from '../../routes';
import { SignUpViewModel } from './SignUpViewModel';

const SignupSchema = Yup.object().shape({
	fullName: Yup.string().required('Required'),
	phoneNumber: Yup.string().required('Required'),
	emailAddress: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string().required('Required'),
	checkBox: Yup.boolean().required().isTrue(),
});

export const SignUp = ({ navigation }: DefaultScreenProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const viewModel = new SignUpViewModel();

	const handleSubmit = async (
		fullName: string,
		phoneNumber: string,
		emailAddress: string,
		password: string,
		confirmPassword: string,
	) => {
		if (password === confirmPassword) {
			setIsLoading(true);
			try {
				await viewModel.signUp(fullName, phoneNumber, emailAddress, password);
				setIsLoading(true);
				navigation.navigate('signin');
			} catch (error) {
				Alert.alert(String(error));
				setIsLoading(false);
			}
			setIsLoading(false);
		} else {
			Alert.alert('Passwords do not match');
		}
	};

	return (
		<ScrollView style={styles.scrollContainer}>
			<StatusBar />
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView>
					{isLoading && <ActivityIndicator />}
					<Text style={styles.title}>Create an account</Text>
					<Text style={styles.subtitle}>
						Complete the sign up process to get started
					</Text>
					<Formik
						validationSchema={SignupSchema}
						initialValues={{
							fullName: '',
							phoneNumber: '',
							emailAddress: '',
							password: '',
							confirmPassword: '',
							checkBox: false,
						}}
						onSubmit={(values) => {
							handleSubmit(
								values.fullName,
								values.phoneNumber,
								values.emailAddress,
								values.password,
								values.confirmPassword,
							);
						}}
					>
						{({
							handleChange,
							handleSubmit,
							values,
							isValid,
							dirty,
							errors,
							setFieldValue,
						}) => (
							<>
								<View style={styles.form}>
									<Input
										autoCapitalize='words'
										errors={errors.fullName}
										label='Full Name'
										value={values.fullName}
										onChangeText={handleChange('fullName')}
										placeholder='Ivanov Ivan'
									/>
									<Input
										keyboardType='numeric'
										autoCapitalize='none'
										errors={errors.phoneNumber}
										label='Phone Number'
										value={values.phoneNumber}
										onChangeText={handleChange('phoneNumber')}
										placeholder='+7(999)999-99-99'
									/>
									<Input
										autoCapitalize='none'
										keyboardType='email-address'
										errors={errors.emailAddress}
										label='Email Address'
										value={values.emailAddress}
										onChangeText={handleChange('emailAddress')}
										placeholder='***********@mail.com'
									/>
									<Input
										autoCapitalize='none'
										errors={errors.password}
										isProtect
										label='Password'
										value={values.password}
										onChangeText={handleChange('password')}
										placeholder='**********'
									/>
									<Input
										autoCapitalize='none'
										errors={errors.confirmPassword}
										isProtect
										label='Confirm Password'
										value={values.confirmPassword}
										onChangeText={handleChange('confirmPassword')}
										placeholder='**********'
									/>
									<View style={styles.checkboxContainer}>
										<Checkbox
											value={values.checkBox}
											onValueChange={() =>
												setFieldValue('checkBox', !values.checkBox)
											}
											color='#006CEC'
										/>
										<Text style={{ color: '#A7A7A7' }}>
											By ticking this box, you agree to our
											<Text style={{ color: '#EBBC2E' }}>
												Terms and conditions and private policy
											</Text>
										</Text>
									</View>
								</View>
								<View style={styles.buttonsVertical}>
									<CustomButton.Solid
										onPress={handleSubmit}
										title='Sign Up'
										size='md'
										disabled={!isValid || !dirty}
									/>
									<Text style={styles.alreadyText}>
										Already have an account?
										<Text
											onPress={() => navigation.navigate('signin')}
											style={styles.link}
										>
											{' '}
											Sign in
										</Text>
									</Text>
								</View>
							</>
						)}
					</Formik>
				</KeyboardAvoidingView>
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
		paddingTop: 60,
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
	checkboxContainer: {
		paddingTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	input: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#A7A7A7',
		paddingHorizontal: 10,
		paddingVertical: 14,
		fontWeight: '500',
	},
	inputError: {
		borderColor: COLORS.state.error,
		color: COLORS.state.error,
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
