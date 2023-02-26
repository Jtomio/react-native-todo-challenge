import { TextInput, View, FlatList, TouchableOpacity, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import colors from 'tailwindcss/colors'
import { CheckBoxTask } from './CheckoxTask'
import { EmptyTask } from './EmptyTask'


export interface TaskCheckedProps {
  id: number;
  content: string;
  isCompleted: boolean;
}


export function NewTask() {
  const [tasksCreated, setTasksCreated] = useState<TaskCheckedProps[]>([])
  const [taskCreateCount, setTaskCreateCount] = useState(0)
  const [taskCompletedCount, setTaskCompletedCount] = useState(0)
  const [taskContent, setTaskContent] = useState("")

  function handleToggleTaskStatus(id: number) {
    setTasksCreated((state) =>
      state.map((task) => {
        if (task.id == id) {
          if (task.isCompleted == false) {
            setTaskCompletedCount((acc) => acc + 1)
          } else {
            setTaskCompletedCount((acc) => acc - 1)
          }
          return { ...task, isCompleted: !task.isCompleted }
        } else {
          return task
        }
      }))
  }

  function handleDeleteTask(id: number) {
    const taskCompleted = tasksCreated.find((task) => task.id == id)
    ''
    if (taskCompleted?.isCompleted === true) {
      return Alert.alert("Aviso", "Não é possível deletar tarefa concluída.")
    }

    Alert.alert("Deletar tarefa", "Deseja deletar essa tarefa da sua lista?", [
      {
        text: "Sim",
        onPress: () => {
          setTasksCreated((state) => {
            return state.filter((task) => task.id !== id)
          })
          setTaskCreateCount((acc) => acc - 1)
        }
      },
      {
        text: "Não",
        style: "cancel",
      }
    ])
  }

  function handleCreateTask() {
    const taskAlreadyCreated = tasksCreated.find((task) => task.id)

    if (taskAlreadyCreated?.content === taskContent) {
      return Alert.alert("Tarefa Duplicada", "Adicione uma tarefa diferente da lista.")
    }

    if (taskContent === "") {
      return Alert.alert("Tarefa em branco", "Adicione uma tarefa na lista.")
    }

    setTasksCreated((state) => [
      ...state,
      {
        id: Math.round(Math.random() * 1000),
        content: taskContent,
        isCompleted: false,
      }
    ])
    setTaskContent("");
    setTaskCreateCount((acc) => acc + 1);
  }


  return (
    <>
      <View className='flex-row pb-4 my-4'>
        <TextInput
          className='w-[300px] h-8 bg-gray-700 mr-2 pl-3 rounded-sm'
          placeholder='Adione um tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskContent}
          value={taskContent}
        />
        <TouchableOpacity
          className='bg-[#1e6f9f] rounded-sm justify-center items-center w-8'
          onPress={handleCreateTask}

        >
          <AntDesign
            name='pluscircleo'
            size={16}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View className="w-[330px] justify-center items-center">
        <View className="flex-row justify-between w-[330px] h-[19px]">
          <Text className='justify-center items-center w-1/2'>
            <Text className="text-[#4ea8de] justify-center items-center font-semibold">
              Criadas {''}
              <Text className='text-white font-semibold'>{taskCreateCount}</Text>
            </Text>
          </Text>
          <View className='flex-row justify-center items-center'>
            <Text className="text-[#4ea8de] justify-center items-center font-semibold mr-1">Concluídas</Text>
            <Text className='text-white font-semibold'>{taskCompletedCount}</Text>
          </View>
        </View>
      </View>
      <FlatList
        keyExtractor={(task) => String(task.id)}
        data={tasksCreated}
        renderItem={({ item }) => (
          <CheckBoxTask
            key={item.id}
            task={item}
            handleRemoveTask={handleDeleteTask}
            handleToggleTaskStatus={handleToggleTaskStatus}
          />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyTask />}

      />
    </>
  )
}