import { Text, View } from "react-native";
import { Tile } from "../components/Tile";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
     <Tile w={300} h={300}  label="label"  paragraph="Paragraph ajknvjkv jkavnjka vkjanvjknv avjknavnkavjvn jkavnjvnjv nvkavnjnv" icon="box"  variant="variant-2" enabled={true} selected={false}/>
    </View>
  );
}
