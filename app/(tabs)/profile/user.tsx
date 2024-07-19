import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "@/components/usercard";
import commonStyles from "@/styles/common";

export default function User() {
  return (
    <SafeAreaView style={[commonStyles.screen, commonStyles.centered]}>
      <UserCard
        username="hakkuov"
        imageSource="https://w.wallhaven.cc/full/we/wallhaven-werdv6.png"
      />
    </SafeAreaView>
  );
}
