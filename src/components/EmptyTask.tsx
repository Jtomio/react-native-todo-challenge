import { Text, View } from "react-native";
import EmptyImg from '../assets/EmptyTask.svg'


export function EmptyTask() {
  return (
    <View className=" w-[330px] h-60 justify-center items-center border-t-2 border-gray-800 mt-4">
      <EmptyImg />
      <Text className="mt-4 text-gray-300 font-semibold">Você ainda não tem tarefas cadastradas</Text>
      <Text className="text-gray-300">Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}