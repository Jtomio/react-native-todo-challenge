import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { TaskCheckedProps } from "./NewTask"


interface TaskProps {
  task: TaskCheckedProps;
  handleRemoveTask: (id: number) => void;
  handleToggleTaskStatus: (id: number) => void;
}


export function CheckBoxTask({ handleRemoveTask,
  handleToggleTaskStatus,
  task }: TaskProps) {



  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className=' flex-row items-center justify-between py-4 bg-[#333333] rounded-lg w-[340px] p-3 mt-3'

    >
      <TouchableOpacity onPress={() => handleToggleTaskStatus(task.id)}>

        <MaterialCommunityIcons
          name={
            task.isCompleted ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
          }
          size={20}
          color={task.isCompleted ? '#5e60ce' : "#4ea8de"}
        />
      </TouchableOpacity>


      <Text
        className={
          task.isCompleted
            ? 'text-gray-100 text-base -ml-56 opacity-50 line-through'
            : ' w-16 -ml-48 text-gray-200 bg-[#333333]'
        }
      >{task.content}</Text>



      <TouchableOpacity
        onPress={() => handleRemoveTask(task.id)}
        className="flex-row"
      >
        <FontAwesome
          name="trash-o"
          size={16}
          color="#808080"
          className='px-8'
        />
      </TouchableOpacity>


    </TouchableOpacity >
  )
}