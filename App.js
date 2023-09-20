/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App: () => Node = () => {

  function getContactsClick() {
    console.log("点击获取联系人");
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>ReactNative获取通讯录</Text>
      <Button title={ "获取联系人" } onPress={ getContactsClick } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    paddingHorizontal: 16,
    marginTop: 6,
  },
  title: {
    fontSize: 16,
    color: "#000000",
    alignSelf: "center",
    marginBottom: 12,
  },
});

export default App;
