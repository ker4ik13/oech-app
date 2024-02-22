import { ActivityIndicator, Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import { Checkbox } from "expo-checkbox";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { SignInViewModel } from "./SignInViewModel";
import { DefaultScreenProps } from "../../routes";
import Title from "../../components/ui/Title";
import { CustomButton, Input } from "../../components/ui";

const SigninSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

export const SignIn = ({ navigation }: DefaultScreenProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [savedPassword, setSavedPassword] = useState<string | null>("");

    const viewModel = new SignInViewModel();

    async function handleSubmit(email: string, password: string, rememberPassword: boolean) {
        setIsLoading(true);
        try {
            const res = await viewModel.signIn(email, password, rememberPassword);
            setIsLoading(false);
            navigation.navigate('holder');
        } catch (error) {
            setIsLoading(false);
            Alert.alert(String(error));
        }
    }

    useEffect(() => {
        viewModel.getExistedPassword().then((res) => setSavedPassword(res));
    }, []);

    return (
        <ScrollView style={styles.scrollContainer}>
			<StatusBar />
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView>
                <Title title="Welcome Back" subtitle="Fill in your email and password to continue" />
                <Formik
                    validationSchema={SigninSchema}
                    initialValues={{
                        email: "",
                        password: "",
                        checkBox: false,
                    }}
                    onSubmit={(values) => handleSubmit(values.email, values.password, values.checkBox)}
                >
                    {({ handleChange, handleSubmit, values, isValid, dirty, setFieldValue, errors }) => (
                        <>
                            <View style={styles.form}>
                                <Input
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    errors={errors.email}
                                    label="Email Address"
                                    onChangeText={handleChange("email")}
                                    value={values.email}
                                    placeholder="***********@mail.com"
                                />
                                <Input
                                    autoCapitalize="none"
                                    errors={errors.password}
                                    isProtect
                                    label="Password"
                                    onChangeText={handleChange("password")}
                                    value={values.password}
                                    placeholder="**********"
                                />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                    <Checkbox
                                        value={values.checkBox}
                                        onValueChange={() => setFieldValue("checkBox", !values.checkBox)}
                                        color="#A7A7A7"
                                    />
                                    <Text style={{ color: "#A7A7A7" }}>Remember password</Text>
                                </View>

                                <Text style={styles.link}>Forgot Password?</Text>
                            </View>
                            {isLoading && <ActivityIndicator />}
                            <View style={styles.buttonsVertical}>
                                <CustomButton.Solid
                                    onPress={handleSubmit}
                                    title='Log in'
                                    size='md'
                                    disabled={!isValid || !dirty}
                                />
                                <Text style={styles.alreadyText}>
                                    Don't have an account?
                                    <Text
                                        onPress={() => navigation.navigate('signup')}
                                        style={styles.link}
                                    >
                                        {' '}
                                        Sign up
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
    inputContainer: {
        paddingTop: 20,
        gap: 24,
    },
    form: {
		marginTop: 30,
		gap: 24,
		width: '100%',
	},
    checkboxContainer: {
        paddingTop: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        marginBottom: 20,
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