import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { COLORS } from '../../../values';

interface ButtonProps {
	title: string;
	onPress?: (...args: any) => void;
	size: 'sm' | 'md';
	disabled?: boolean;
}

export const CustomButton = {
	Outlined: ({ title, size, onPress }: ButtonProps) => {
		switch (size) {
			case 'sm':
				return (
					<Pressable>
						<TouchableOpacity onPress={onPress}>
							<View style={styles.outlineButtonSmall}>
								<Text style={styles.outlineTextSmall}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
			case 'md':
				return (
					<Pressable>
						<TouchableOpacity onPress={onPress}>
							<View style={styles.outlineButtonMedium}>
								<Text style={styles.outlineTextMedium}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
		}
	},
	Solid: ({ size, title, onPress, disabled }: ButtonProps) => {
		switch (size) {
			case 'sm':
				return (
					<Pressable>
						<TouchableOpacity onPress={onPress} disabled={disabled}>
							<View
								style={[styles.solidButtonSmall, disabled && styles.disabled]}
							>
								<Text style={styles.solidTextSmall}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
			case 'md':
				return (
					<Pressable>
						<TouchableOpacity onPress={onPress} disabled={disabled}>
							<View
								style={[styles.solidButtonMedium, disabled && styles.disabled]}
							>
								<Text style={styles.solidTextMedium}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
		}
	},
};

const styles = StyleSheet.create({
	outlineButtonSmall: {
		paddingHorizontal: 36,
		paddingVertical: 20,
		borderWidth: 1,
		borderColor: COLORS.brand.primary.color,
		borderRadius: 5,
	},
	outlineTextSmall: {
		textAlign: 'center',
		fontSize: 14,
		color: COLORS.brand.primary.color,
		fontWeight: '700',
	},
	outlineButtonMedium: {
		paddingHorizontal: 25,
		paddingVertical: 15,
		borderWidth: 1,
		borderColor: COLORS.brand.primary.color,
		borderRadius: 5,
	},
	outlineTextMedium: {
		textAlign: 'center',
		fontSize: 16,
		color: COLORS.brand.primary.color,
		fontWeight: '700',
	},
	solidButtonSmall: {
		paddingHorizontal: 36,
		paddingVertical: 20,
		borderRadius: 5,
		backgroundColor: COLORS.brand.primary.color,
	},
	disabled: {
		backgroundColor: COLORS.gray[200],
	},
	solidTextSmall: {
		textAlign: 'center',
		fontSize: 14,
		color: COLORS.white,
		fontWeight: '700',
	},
	solidButtonMedium: {
		paddingHorizontal: 25,
		paddingVertical: 15,
		borderRadius: 5,
		backgroundColor: COLORS.brand.primary.color,
	},
	solidTextMedium: {
		textAlign: 'center',
		fontSize: 16,
		color: COLORS.white,
		fontWeight: '700',
	},
});
