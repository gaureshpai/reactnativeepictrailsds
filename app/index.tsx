import { Text, View } from "react-native";
import Rect from "@/components/button/rect";
import Tile from "@/components/tile/tile";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Rect label="Click Me!" variant="secondary" state="default" onClick={() => alert("Button pressed") } />
        <Text className="typography-heading-small">Welcome to the app</Text>
        <Tile label="Label" 
        paragraph="Paragraph" 
        variant="variant-2" 
        icon="label" 
        enabled={false} 
        selected={true}></Tile>
    </View>
  );
}
