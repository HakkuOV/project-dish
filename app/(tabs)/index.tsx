import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";

export default function MainScreen() {
  return (
    <SafeAreaView
      style={[commonStyles.screen, commonStyles.centered]}
    ></SafeAreaView>
  );
}
