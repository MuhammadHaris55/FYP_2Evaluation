import React, { useEffect, useState } from "react";
import { Button } from "react-native";
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

export default function NewPractice(props) {
  const [name, setName] = useState("haris");
  const [na, setNa] = useState("har");
  const [age, setAge] = useState("12");

  const preeButton = () => {
    setName(na);
    // setName(new.target);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Name : {name} </Text>
        <TextInput
          style={styles.input}
          placeholder="Add new entity"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setNa(text)}
          //value={name}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          // style={styles.input}
          // placeholder={"enter name"}
          // placeholderTextColor={"#335"}
          // underlineColorAndroid="transparent"
        />
        {/* <View style={styles.button} >
          <Button title="Change" onPress={preeButton} />
        </View> */}

        <TouchableOpacity style={styles.button} onPress={preeButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text>Enter your Age :</Text>
      <TextInput
        style={styles.input}
        placeholder={"enter age"}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <Text>
        {name} , {age}
      </Text>
    </View>
  );
}
