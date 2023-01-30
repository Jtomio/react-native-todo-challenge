import { TextInput, View, FlatList, TouchableOpacity, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import colors from 'tailwindcss/colors'
import { CheckBoxTask } from './CheckoxTask'
import { EmptyTask } from './EmptyTask'



export function NewTask() {

  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')
  const taskNumber = tasks.length



  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert(`A tarefa ${taskName}, já consta na lista.`)

    }
    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }



  function handleTaskRemove(item: string) {
    Alert.alert('Exluir', `Deseja excluir a tarefa: ${item}`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== item))
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  function toggleTask() {
    Alert.alert("clicou no check")
  }


  return (
    <View>
      <View className='flex-row pb-4 my-4'>
        <TextInput
          className='w-[300px] h-8 bg-gray-700 mr-2 pl-3 rounded-sm'
          placeholder='Adicionar uma tarefa'
          placeholderTextColor='#6b6b6b'
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity
          className='bg-[#1e6f9f] rounded-sm justify-center items-center w-8'
          onPress={handleTaskAdd}

        >
          <AntDesign
            name='pluscircleo'
            size={16}
            color={colors.white}
          />

        </TouchableOpacity>

      </View>
      <View className="w-[330px] justify-center items-center">
        <View className="flex-row justify-between w-[330px] h-[19px]" >
          <Text className='justify-center items-center w-1/2'>
            <Text className="text-[#4ea8de] justify-center items-center font-semibold">
              Criadas {''}

              <Text className='text-white font-semibold'>{' '}{taskNumber}</Text>

            </Text>
          </Text>

          <Text className="text-gray-100">Concluidas 0</Text>
        </View>
      </View>

      <FlatList
        keyExtractor={item => item}
        data={tasks}
        renderItem={({ item }) => (
          <CheckBoxTask
            key={item}
            task={item}
            onPress={() => handleTaskRemove}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyTask />
        )}
      />
    </View>
  )
}