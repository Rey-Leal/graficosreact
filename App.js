import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  StyleSheet,
  Alert,
  Button
} from "react-native";
import { BarChart, PieChart, LineChart } from "react-native-chart-kit";

const dadosBarra = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
      colors: [
        (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        (opacity = 1) => `rgba(75, 148, 255, ${opacity})`,
        (opacity = 1) => `rgba(0, 230, 118, ${opacity})`,
        (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        (opacity = 1) => `rgba(255, 159, 64, ${opacity})`
      ]
    }
  ]
};

const dadosPizza = [
  {
    name: "Jan",
    value: 20,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Fev",
    value: 45,
    color: "rgba(255, 99, 71, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Mar",
    value: 28,
    color: "rgba(99, 255, 71, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Abr",
    value: 5,
    color: "rgba(50, 150, 100, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const dadosLinha = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})` // Cor da linha do gráfico
    }
  ]
};

const configBarra = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2
};

const configPizza = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Gastos</Text>
      <BarChart
        style={styles.graficoBarras}
        data={dadosBarra}
        width={300}
        height={200}
        yAxisLabel="R$"
        chartConfig={configBarra}
      />

      <Text>Médias</Text>
      <LineChart
        data={dadosLinha}
        width={300}
        height={200}
        yAxisLabel="R$"
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` // Cor do texto do gráfico
        }}
        bezier
      />

      <Text>Atendimentos</Text>
      <PieChart
        data={dadosPizza}
        width={300}
        height={200}
        chartConfig={configPizza}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    padding: 16
  },
  graficoBarras: {
    marginVertical: 8,
    borderRadius: 16
  }
});

export default App;
