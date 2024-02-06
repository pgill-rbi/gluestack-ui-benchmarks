import NavigationProvider from "./navigation/NavigationProvider";
import HomeScreen from "./HomeScreen";
import {
  ChangeVariants,
  LayoutScreen,
  BoxComponent,
  ComplexStyling,
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
                <Stack.Screen
                  name="updating-variant"
                  component={ChangeVariants}
                  options={{
                    title: "Updating variant",
                  }}
                />
                <Stack.Screen
                  name="theme-inline-styling"
                  component={ComplexStyling}
                  options={{
                    title: "Theme and inline style",
                  }}
                />
                <Stack.Screen
                  name="layout-screen"
                  component={LayoutScreen}
                  options={{
                    title: "Layout screen",
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
