import LottieView from "lottie-react-native";
import { Dimensions, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");
const index = () => {
  const navigation = useNavigation();
  const handleReset = async() =>{
   await removeItem("onboardingCompleted");
   navigation.navigate("onBoarding");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View>
        <LottieView
          source={require("../assets/animations/succeed.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <Text style={styles.homeText}>Home</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  homeText:{
    fontSize:24,
    fontWeight:"bold",
  },
  resetButton:{
    padding:15,
    backgroundColor:"#a78bfa",
    borderRadius:10,
    color:"#fff",
  }
});
