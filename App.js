import React from "react";
import {View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {

  const styles = StyleSheet.create({
    bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: '#cbf35c' },
    less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
    greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold' },
    button: {
      width: 150,
      height: 50,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: '#3498db'
    },
    buttonText: {
      fontSize: 25,
      color: '#fff'
    }
  });
  
  const count = useState(0);
  const [number, setNumber] = useState(0);
  const onIncrease = setNumber(number + 1);
  const onDecrease = setNumber(number - 1);

  return (
    <View style={[styles.bg]}>
      <Text>Hello React Native</Text>
      <Text>Hello App</Text>
      <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={onIncrease}>
            <Text style={styles.buttonText}>+ Click</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDecrease}>
            <Text style={styles.buttonText}>- Click</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
