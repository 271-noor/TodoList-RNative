import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet, View, Text } from "react-native";
import Task from '@/components/Task';



export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
<View style={styles.container}>
  
  {/* Today's Tasks */}
  <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Today's tasks</Text>

    <View style={styles.items}>
      {/* This is where the tasks will go! */}
      <Task text={'Task 1'} />
      <Task text={'Task 2'} />
    </View>
  </View>
      
      </View>

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
  
});
