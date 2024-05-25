import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Task from './components/Tasks';
import CheckBox from './components/CheckBox'; 


export default function App() {
  // add a input and data state to bind to <TextInput /> and capture the todo entries
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInput(text) {
    console.log(text);
    setInput(text);
  }

  function addEntry() {
    setTasks([...tasks, input]);
    setInput("");
  }

  // add delete function for each data entry
  function deleteEntry(index) {
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index+1)]
    setTasks(newTasks);
  } 

  // render and display the data entries properly
  function renderEntries(index) {
    return tasks.map((task, index) => 
      <TouchableOpacity key={index} onPress={() => deleteEntry(index)}>
          <Task text={task}></Task>
      </TouchableOpacity>);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks:</Text>
            <View style={styles.items}>
              {renderEntries()}
            </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput 
            style={styles.textInput}
            placeholder='Write a task'
            value={input}
            onChangeText={handleInput}
          />
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Button style={styles.addText} title="+" onPress={addEntry}/>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center", 
  },
  textInput: {
    borderWidth: 1.5,
    marginBottom: 10,
    width: 285, 
    height: 50,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0", 
  },
  entryText:{
    padding: 10,
  },
  entryContainer:{
    flexDirection: "row",
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  }, 
  items:{
    marginTop:20,
  },
  tasksWrapper:{
    width:"90%",
  },
  writeTaskWrapper:{
    width:"90%",
    position:"absolute",
    bottom: 60, 
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  addWrapper:{
      width: 60,
      height: 60, 
      backgroundColor: "#FFF",
      borderRadius: 60, 
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#C0C0C0",
      borderWidth: 1.5,
      bottom: 5
  },
  addText:{
    fontSize: 50,
    fontWeight: "bold",
  }
});
