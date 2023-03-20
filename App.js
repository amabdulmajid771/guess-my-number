import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
          <StartGameScreen />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
