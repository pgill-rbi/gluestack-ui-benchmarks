import NavigationProvider from "./navigation/NavigationProvider";
import HomeScreen from "./HomeScreen";
import {
  BoxComponent,
} from "./cases";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ThdProvider,
  lightTheme,
  useThdsFonts,
} from "@tim-hortons-ventures/th-design-system";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "@tim-hortons-ventures/th-design-system/src/theme/gluestack-style.config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useThdsFonts();

  if (!loaded) {
    return <Text>Loading</Text>;
  }

  if (error) {
    throw error;
  }

  return (
    <ThdProvider theme={lightTheme}>
      <StyledProvider config={config}>
        <GestureHandlerRootView style={{ height: "100%" }}>
          <SafeAreaProvider>
            <NavigationProvider>
              <Stack.Navigator initialRouteName="home">
                <Stack.Screen
                  name="home"
                  component={HomeScreen}
                  options={{
                    title: "Home",
                  }}
                />
                <Stack.Screen
                  name="box-component"
                  component={BoxComponent}
                  options={{
                    title: "Box component",
                  }}
                />
              </Stack.Navigator>
            </NavigationProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </StyledProvider>
    </ThdProvider>
  );
}
