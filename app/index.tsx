import { Text, View } from "react-native";
import Rect from "@/components/button/rect";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Rect label="Click Me!" variant="secondary" state="default" onPress={() => alert("Button pressed") } />
    </View>
  );
}
