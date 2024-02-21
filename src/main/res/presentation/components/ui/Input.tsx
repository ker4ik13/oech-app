import { FC, useState } from 'react';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';

interface InputProps extends TextInputProps {
	label: string;
	isProtect?: boolean;
	errors?: string;
}

export const Input: FC<InputProps> = ({
	label,
	isProtect = false,
	errors = '',
	...props
}) => {
	const [isHidden, setIsHidden] = useState(true);
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={[styles.input, Boolean(errors) && { borderColor: 'red' }]}>
				<TextInput
					style={[Boolean(errors) && { color: 'red' }]}
					{...props}
					secureTextEntry={isHidden}
				/>
				<Pressable onPress={() => setIsHidden(!isHidden)}>
					{isProtect &&
						(isHidden ? (
							<Image
								style={{
									width: 20,
									objectFit: 'contain',
								}}
								source={require('../../../../../../assets/icons/eye.png')}
							/>
						) : (
							<Image
								style={{
									width: 26,
									objectFit: 'contain',
								}}
								source={require('../../../../../../assets/icons/eye-slash.png')}
							/>
						))}
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 8,
	},
	label: {
		color: '#A7A7A7',
		fontSize: 14,
	},
	input: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#A7A7A7',
		color: '#A7A7A7',
		paddingHorizontal: 14,
		paddingVertical: 10,
		borderRadius: 4,
	},
});
