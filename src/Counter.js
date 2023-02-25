import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import App from '../App';
import {styles} from '../style/styles';

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Text style={styles.textContainer}>Counter App</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.textContainer}>{count}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress= {() => setCount(count + 1)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress= {() => setCount(count - 1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
      </View>
    </View>    
  );
}
