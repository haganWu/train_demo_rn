/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import type { Node } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import ContactsNativeModule from "./ContactsLoader";

const App: () => Node = () => {

  const [contactsList, setContactsList] = useState([]);

  const getContactsClick = () => {
    console.log(`点击获取联系人:${ ContactsNativeModule }`);
    ContactsNativeModule.getContactsMethod("data to native", (result) => {
      console.log("Received from native:", result);
      setContactsList([]);
      let contactListResult = JSON.parse(result);
      setContactsList(contactListResult);
    });
  };

  const callTelephone = (contactNumber) => {
    console.log(`拨打电话:${ contactNumber }`);
    ContactsNativeModule.callTelephone(contactNumber);
  };

  const renderItem = ({ item }) => (
    <View style={ styles.item }>
      <Text style={ styles.itemTitle }>{ item.contactName }</Text>
      <Text style={ styles.itemTitle }>{ item.contactNumber }</Text>
      <Text style={ styles.btnCallTelephone } onPress={ (i) => callTelephone(item.contactNumber) }>拨打</Text>
    </View>
  );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>ReactNative获取通讯录</Text>
      <Text style={ styles.btnCallGet } onPress={ (i) => getContactsClick() }>获取联系人</Text>
      <FlatList
        data={ contactsList }
        keyExtractor={ (item) => item.contactNumber }
        renderItem={ renderItem } />
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemTitle: {
    fontSize: 16,
    color: "#000000",
  },
  btnCallTelephone: {
    backgroundColor: "#2196f3",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    color: "#ffffff",
    fontSize: 12,
  },
  btnCallGet: {
    backgroundColor: "#6f43c0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 60,
  },
});

export default App;
