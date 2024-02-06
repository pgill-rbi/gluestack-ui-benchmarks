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
