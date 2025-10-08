import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-bold text-blue-500">
          Hola mundo!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;