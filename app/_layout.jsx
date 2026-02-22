import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import "react-native-reanimated";
import { getItem } from "../utils/asyncStorage";

export default function RootLayout() {
  const [showOnboarding, setShowOnboarding] = useState(null);
 
  useEffect(()=>{
    checkOnboardingStatus();
  },[])
  const checkOnboardingStatus = async () => {
    let onboardingStatus = await getItem("onboardingCompleted");
    if(onboardingStatus === "true"){
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  }



  if (showOnboarding === null) {
    return null; // or a loading indicator
  }

  if (showOnboarding) {
    return <Stack screenOptions={{ headerShown: false }} initialRouteName="onBoarding" />;
  }

  return <Stack screenOptions={{ headerShown: false }} initialRouteName="index" />;

}
