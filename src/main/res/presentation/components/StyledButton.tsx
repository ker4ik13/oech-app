import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { COLORS } from '../../values';

interface ButtonProps {
	title: string;
	onPress?: (...args: any) => void;
	size: 'sm' | 'md';
}

export const StyledButton = {
	Outlined: ({ title, size, onPress }: ButtonProps) => {
		switch (size) {
			case 'sm':
				return (
					<Pressable onPress={onPress}>
						<TouchableOpacity>
							<View style={styles.outlineButtonSmall}>
								<Text style={styles.outlineTextSmall}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
			case 'md':
				return (
					<Pressable onPress={onPress}>
						<TouchableOpacity>
							<View style={styles.outlineButtonMedium}>
								<Text style={styles.outlineTextMedium}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
		}
	},
	Solid: ({ size, title, onPress }: ButtonProps) => {
		switch (size) {
			case 'sm':
				return (
					<Pressable onPress={onPress}>
						<TouchableOpacity>
							<View style={styles.solidButtonSmall}>
								<Text style={styles.solidTextSmall}>{title}</Text>
							</View>
						</TouchableOpacity>
					</Pressable>
				);
			case 'md':
				return (
					<Pressable onPress={onPress}>
						<TouchableOpacity>
							<View style={styles.solidButtonMedium}>
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
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.brand.primary.color,
		borderRadius: 5,
	},
	outlineTextSmall: {
		textAlign: 'center',
		fontSize: 10,
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
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		backgroundColor: COLORS.brand.primary.color,
	},
	solidTextSmall: {
		textAlign: 'center',
		fontSize: 10,
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
