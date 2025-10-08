import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1 font-montserrat">
      <View className="flex-1 items-center justify-center bg-white gap-4 ">
        <Text className="text-3xl text-blue-500 font-montserrat">
          Hola mundo!
        </Text>

        <Text className="text-3xl text-blue-500 font-montserrat-black">
          Hola mundo!
        </Text>

        <Text className="text-3xl text-blue-500 font-montserrat-light">
          Hola mundo!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;