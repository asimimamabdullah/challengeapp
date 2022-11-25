import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Text,
	View,
	Animated,
	Pressable,
} from "react-native";
import check from "./assets/check.png";

export default function App() {
	const anim = new Animated.Value(0);
	const animCheck = new Animated.Value(0);
	const animJoined = new Animated.Value(0);

	const handleClick = () => {
		Animated.timing(anim, {
			toValue: 1,
			duration: 4000,
			useNativeDriver: true,
		}).start();
	};

	const opacity = anim.interpolate({
		inputRange: [0, 0.1, 1],
		outputRange: [1, 0, 0],
	});

	const opacityCheck = anim.interpolate({
		inputRange: [0, 0.12, 0.3, 1],
		outputRange: [0, 0, 1, 0],
	});

	const opacityJoined = anim.interpolate({
		inputRange: [0, 0.7, 1],
		outputRange: [1, 1, 0],
	});

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20 }}>
				Press prototype to see button animation
			</Text>

			<Pressable onPress={handleClick}>
				<Animated.View style={{ opacity: opacityJoined }}>
					<LinearGradient
						style={{
							width: 100,
							height: 40,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 30,
							backgroundColor: "none",
						}}
						colors={["#b666d2", "#ff4593"]}
						end={{ x: 0.2, y: 0.9 }}
						locations={[0.1, 0.7]}>
						<Animated.Text
							style={{ fontSize: 18, color: "white", opacity: opacity }}>
							Join
						</Animated.Text>
						<Animated.Image
							source={check}
							style={{
								width: 30,
								height: 30,
								opacity: opacityCheck,
								position: "absolute",
								tintColor: "white",
							}}
						/>
					</LinearGradient>
				</Animated.View>
				<View
					style={{
						width: 100,
						height: 40,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 30,
						position: "absolute",
					}}>
					<Text style={{ fontSize: 18, color: "black", zIndex: -1 }}>
						Joined
					</Text>
				</View>
			</Pressable>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingHorizontal: 20,
	},
});
