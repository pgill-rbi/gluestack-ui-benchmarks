import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const RenderTimeBarChart = ({ renderTimes }) => {
  if (!renderTimes["React Native"] || !renderTimes["NativeBaseDS"] || !renderTimes["GluestackDS"]) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "black", alignItems: "center" }}>
      <BarChart
        data={{
          labels: ["RN", "NB", "GS"],
          datasets: [
            {
              data: [
                renderTimes["React Native"],
                renderTimes["NativeBaseDS"],
                renderTimes["GluestackDS"],
              ],
            },
          ],
        }}
        width={300}
        height={220}
        yAxisLabel=""
        yAxisSuffix="ms"
        yAxisInterval={10}
        fromZero
        showBarTops
        showValuesOnTopOfBars
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(15, 10, 222, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
          barPercentage: 1,
          decimalPlaces: 0,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default RenderTimeBarChart;
