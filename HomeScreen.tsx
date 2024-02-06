import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a suite to start measuring</Text>
      <Button
        title="Box component"
        onPress={() => navigation.navigate("box-component")}
      />
      <Button
        title="Updating variants"
        onPress={() => navigation.navigate("updating-variant")}
      />
      <Button
        title="Theme and inline style"
        onPress={() => navigation.navigate("theme-inline-styling")}
      />
      <Button
        title="Layout screen"
        onPress={() => navigation.navigate("layout-screen")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    marginTop: 32,
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
