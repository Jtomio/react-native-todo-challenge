import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Alert, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import colors from 'tailwindcss/colors'
import { FontAwesome } from '@expo/vector-icons';


type Props = {
  checked?: boolean;
  task: string
  onRemove: () => void

}
export function CheckBoxTask({ task, onRemove, checked = true }: Props) {



  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row justify-between items-center py-4 bg-[#333333] rounded-lg w-[330px] p-3 mt-3'>
      {checked
        ?
        <>
          <Animated.View
            className='h-6 w-6 bg-[#5E60CE] rounded-full items-center justify-center'
            entering={ZoomIn}
            exiting={ZoomOut}>
            <Feather
              name='check'
              size={16}
              color={colors.white}
            />
          </Animated.View>
          <Text
            className='text-gray-100 text-base -ml-56 opacity-50 line-through'
          >{task}
          </Text>
        </> :
        <>
          <View className='h-6 w-6 bg-[#333333] border-2 border-[#4EA8DE] rounded-full' />
          <Text className='text-white text-base -ml-56'>{task}</Text>
        </>}
      <FontAwesome
        name="trash-o"
        size={16}
        color="#808080"
        // onPress={onPress}
        onRemove={onRemove}

        className='px-8'
      />
    </TouchableOpacity >
  )
}