import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Onboarding Screen 1</Text>
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe the channel to boost your productivity and learn new things",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Onboarding Screen 2</Text>
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get Your work done seamlessly without interruptions and distractions. ",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Onboarding Screen 3</Text>
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle: "By boosting your productivity you can achieve higher goals.",
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
    }
})