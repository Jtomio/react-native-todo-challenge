import { FlatList, ScrollView, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export function Tasks() {
  return (
    <View>

      <View className="w-[350px] flex-row justify-between items-center ">
        <Text className="text-gray-100">Criadas 5</Text>
        <Text className="text-gray-100">Concluidas 2</Text>
      </View>


    </View>

  )
}