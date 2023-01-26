import { View, Text, FlatList, Alert, TextInput, TouchableOpacity } from "react-native";
import { Header } from "./Header";
import { NewTask } from "./NewTask";
import { Tasks } from "./Tasks";


export function Home() {
  return (
    <View className="flex-1  justify-center items-center pt-40 bg-[#0d0d0d]">
      <Header />
      <NewTask />
      {/* <Tasks /> */}

    </View>
  )
}