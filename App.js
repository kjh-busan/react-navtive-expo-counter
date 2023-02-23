import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import {styles} from './styles/styles';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.textContainer}>Counter App : {count}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress= {() => setCount(count - 1)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress= {() => setCount(count + 1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
      </View>
    </View>    
  );
}
