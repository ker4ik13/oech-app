import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../values';

interface IndicatorsProps {
	count: number;
	activeIndex: number;
}

export const Indicators = ({ activeIndex, count }: IndicatorsProps) => {
	if (activeIndex > count - 1) {
		throw new Error('activeIndex should be less than count');
	}

	const isActiveIndicator = (index: number) =>
		index === activeIndex ? styles.activeIndicator : styles.unactiveIndicator;

	return (
		<View style={styles.indicators}>
			{[...new Array(count)].map((_, index) => (
				<View style={isActiveIndicator(index)} key={index}></View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	indicators: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 100,
		gap: 10,
	},
	activeIndicator: {
		width: 10,
		height: 10,
		backgroundColor: COLORS.brand.primary.color,
		borderRadius: 100,
	},
	unactiveIndicator: {
		width: 10,
		height: 10,
		borderRadius: 100,
		backgroundColor: COLORS.gray[100],
	},
});
