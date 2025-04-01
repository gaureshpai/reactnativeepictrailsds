import { Text, View } from "react-native";
import { RectButton } from "reactnativeepictrailsds";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <RectButton label="Button" state="pressed"/>
    </View>
  );
}
