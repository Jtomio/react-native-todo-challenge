import { TextInput, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import colors from 'tailwindcss/colors'

export function NewTask() {
  return (
    <View className='flex-row'>
      <TextInput
        className=' bg-gray-500 mr-2'
        placeholder='Adicionar nova Tarefa...'
        placeholderTextColor='#808080'
      />

      <TouchableOpacity
        className='bg-[#1e6f9f] rounded-sm justify-center items-center w-8'

      >
        <AntDesign
          name='pluscircleo'
          size={16}
          color={colors.white}
        />

      </TouchableOpacity>
    </View>
  )
}