import React, { useState } from 'react';

import { Image, StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Keyboard } from "react-native";
import Task from '@/components/Task';


export default function TabLayout() {

  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  }

  return (
<View style={styles.container}>
  
  {/* Today's Tasks */}
  <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Today's tasks</Text>

    <View style={styles.items}>
       {/* This is where the tasks will go!  */}
      {
        taskItem.map((item, index) => {
        return <Task key={index} text={item} />
      })
      }
      {/* <Task text={'Task 1'} />
      <Task text={'Task 2'} /> */}
    </View>
  </View>
      
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper} 
            >
              <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper} >
                  <Text style={styles.addText} >+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>

      // Write a task.


  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
      
    },
    writeTaskWrapper: {
      paddingHorizontal: 10,
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1, 
      width: 250,
    },
    addWrapper: {
      width: 45,
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1, 
    },
    addText: {},
  
});
