import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import colors from 'tailwindcss/colors'
import { FontAwesome } from '@expo/vector-icons';



type Props = {
  checked?: boolean;
  task: string
  onRemove: () => void

}

export function CheckBox({ task, onRemove, checked }: Props) {



  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row justify-between items-center py-4 bg-[#333333] rounded-lg w-[330px] p-3 mt-3'

    >

      {
        checked
          ?

          <>
            <Animated.View
              className='h-6 w-6 bg-[#53b6f3] rounded-full justify-center items-center'
              entering={ZoomIn}
              exiting={ZoomOut}

            >
              <Feather
                name='check'
                size={16}
                color={colors.white}

              />


            </Animated.View>

            <Text
              className='text-gray-100 text-base -ml-40 opacity-50 line-through'
            >
              {task}
            </Text>
          </>

          :
          <>

            <View className='h-6 w-6 bg-zinc-900 rounded-full border border-[#4ea8de]' />
            <Text
              className='text-gray-100 text-base -ml-40'
            >
              {task}
            </Text>
          </>

      }


      <FontAwesome
        name="trash-o"
        size={16}
        color="#808080"
        onPress={onRemove}
      />


    </TouchableOpacity >
  )
}