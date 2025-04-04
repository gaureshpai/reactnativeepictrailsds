import { Text, View } from "react-native";
import { Grid } from "../components/grid";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="space-x-10">
      <Grid container spacing={2} rows={2}>
    <Grid.Item size={4}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=8</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=4</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=4</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=8</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=8</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=4</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={1}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=4</Text>
      </View>
    </Grid.Item>
    <Grid.Item size={8}>
      <View style={{ height: 50, backgroundColor: '#333' }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>xs=6 md=8</Text>
      </View>
    </Grid.Item>
  </Grid>
      </View>
    </View>
  );
}