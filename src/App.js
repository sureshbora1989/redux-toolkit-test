import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { HomeScreen } from "../src/screens";
import store from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
