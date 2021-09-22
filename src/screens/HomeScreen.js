import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slice/counterSlice";

const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incCounter = () => {
    // console.log("Increment Called");
    dispatch(increment());
  };

  return (
    <View>
      <Text>{count} </Text>
      <Text>THis is Home Screen</Text>
      <Button title="Increase" onPress={incCounter} />
    </View>
  );
};

export { HomeScreen };
