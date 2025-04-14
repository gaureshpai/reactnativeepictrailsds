import { Text, View } from "react-native";
import { RectButton } from "../components/Button";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <RectButton label="df" onPress={() => alert("pressed")}/>
    </View>
  );
}
