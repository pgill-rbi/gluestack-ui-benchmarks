import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import ReactNative from "./ReactNative";
import NativeBase from "./NativeBase";
import TimedRender from "../../components/TimedRender";
import StyledComponents from "./styled-components";

function ChangeVariants() {
  const [styleType, setStyleType] = useState(undefined);
  const [toggleVariant, setToggleVariant] = useState(false);

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <ReactNative toggleVariant={toggleVariant} />;
      case "NativeBase":
        return <NativeBase toggleVariant={toggleVariant} />;
      case "Styled Component":
        return <StyledComponents toggleVariant={toggleVariant} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button title="NativeBase" onPress={onStyleTypePress("NativeBase")} />
      <Button
        title="Styled Component"
        onPress={onStyleTypePress("Styled Component")}
      />
      <Button
        title="Change variant"
        onPress={() => setToggleVariant(!toggleVariant)}
        color="red"
      />
      {styleType ? (
        <TimedRender key={styleType + toggleVariant}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}

      {renderStyleLibrary()}
    </View>
  );
}

export default ChangeVariants;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
