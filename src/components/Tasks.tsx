
import { ScrollView, Text, View, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from "./Checkox";
import { EmptyTask } from "./EmptyTask";






export function Tasks() {


  return (

    <ScrollView >
      <View className="w-[330px] f items-center">
        <View className="flex-row justify-between w-[327px] h-[19px]" >
          <Text className="text-[#4ea8de] font-semibold">Criadas 0</Text>
          <Text className="text-gray-100">Concluidas 0</Text>
        </View>
      </View>



      {/* <EmptyTask /> */}
    </ScrollView >


  )
}