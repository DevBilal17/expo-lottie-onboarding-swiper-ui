import { useNavigation } from "expo-router";
import LottieView from "lottie-react-native";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
const { width } = Dimensions.get("window");
const OnBoarding = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate("index");
    }
    const doneButton = ({ ...props }) => (
        <TouchableOpacity {...props} style={styles.doneButton}>
            <Text >Done</Text>
        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <LottieView
                source={require("../assets/animations/boost.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            ),
            title: "Boost Productivity",
            subtitle:
              "Subscribe the channel to boost your productivity and learn new things",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <LottieView
                source={require("../assets/animations/seamlessly.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            ),
            title: "Work Seamlessly",
            subtitle:
              "Get Your work done seamlessly without interruptions and distractions. ",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <LottieView
                source={require("../assets/animations/Bussiness.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity you can achieve higher goals.",
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton:{
    padding:15,
    backgroundColor:"#fff",
    borderTopLeftRadius:"100%",
    borderBottomLeftRadius:"100%",
  }
});

export default OnBoarding;
