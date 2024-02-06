import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import RenderTimeBarChart from "../../components/BarChart";
import ReactNative from "./ReactNative";
import NativeBase from "./NativeBase";
import TimedRender from "../../components/TimedRender";
import GluestackComponent from "./Gluestack";

function Example() {
  const [styleType, setStyleType] = useState(undefined);
  const [renderTimes, setRenderTimes] = useState({});

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const handleTimeCalculated = (time, type) => {
    setRenderTimes((prevTimes) => ({
      ...prevTimes,
      [type]: time,
    }));
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <ReactNative />;
      case "NativeBaseDS":
        return <NativeBase />;
      case "GluestackDS":
        return <GluestackComponent />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Box Component: Tap a style library to start rendering, chart appears after all 3 rendered.
      </Text>
      <RenderTimeBarChart renderTimes={renderTimes} />
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button title="NativeBaseDS" onPress={onStyleTypePress("NativeBaseDS")} />
      <Button title="GluestackDS" onPress={onStyleTypePress("GluestackDS")} />
      {styleType ? (
        <TimedRender
          key={styleType}
          onTimeCalculated={(time) => handleTimeCalculated(time, styleType)}
        >
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      {renderStyleLibrary()}
    </View>
  );
}

export default function BoxComponent() {
  return <Example />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 32,
  },
  text: {
    marginVertical: 12,
    textAlign: "center",
    marginHorizontal: 4,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
