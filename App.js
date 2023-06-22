import { Button, StatusBar } from "react-native";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { counterIncrement,counterDecrement } from './src/Actions/count';

import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.counter.count);
  let dispatch = useDispatch();
 
 return (
    <View style={styles.container}>
      <Button
        title="increment"
        onPress={() => dispatch(counterIncrement())}
      />
      <Text>{count}</Text>
      <Button
        title="decrement"
        onPress={() => dispatch(counterDecrement())}
      />
      <StatusBar style="auto" />
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



export default App;