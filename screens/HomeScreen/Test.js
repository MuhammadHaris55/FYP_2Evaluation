import React, { useEffect, useState } from "react";
import {
  //   FlatList,
  //   Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
// import { firebase } from "../../firebase/config";

export default function Test(props) {
  const [name, setName] = useState("Haris");
  const [age, setAge] = useState("15");

  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Muhammad Haris"
        onChangeText={(val) => setName(val)}

        //value={entityText}
      />

      <Text style={styles.mytext}>Enter Age</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 16"
        onChangeText={(val) => setAge(val)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
  },
});
*/
