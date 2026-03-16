import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Placar de Truco</Text>

      <View style={styles.placarContainer}>
        {/* Time Nós */}
        <View style={styles.timeBox}>
          <Text style={styles.label}>Nós</Text>
          <Text style={styles.pontuacao}>{pontosNos}</Text>
          <Button title=" + " onPress={() => setPontosNos(pontosNos + 1)} color="#4CAF50" />
          <View style={{ marginTop: 10 }}>
            <Button title=" - " onPress={() => pontosNos > 0 && setPontosNos(pontosNos - 1)} color="#f44336" />
          </View>
        </View>

        {/* Time Eles */}
        <View style={styles.timeBox}>
          <Text style={styles.label}>Eles</Text>
          <Text style={styles.pontuacao}>{pontosEles}</Text>
          <Button title=" + " onPress={() => setPontosEles(pontosEles + 1)} color="#4CAF50" />
          <View style={{ marginTop: 10 }}>
            <Button title=" - " onPress={() => pontosEles > 0 && setPontosEles(pontosEles - 1)} color="#f44336" />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  timeBox: {
    alignItems: 'center',
    width: '40%',
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
  },
  pontuacao: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#2196F3',
  },
});