import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);
  
  // Novos estados para a Etapa 4
  const [vitoriasNos, setVitoriasNos] = useState(0);
  const [vitoriasEles, setVitoriasEles] = useState(0);

  // Lógica para verificar vencedor e resetar rodada
  useEffect(() => {
    if (pontosNos >= 12) {
      Alert.alert("Vitória!", "O time NÓS ganhou a rodada!");
      setVitoriasNos(vitoriasNos + 1);
      setPontosNos(0);
      setPontosEles(0);
    } else if (pontosEles >= 12) {
      Alert.alert("Vitória!", "O time ELES ganhou a rodada!");
      setVitoriasEles(vitoriasEles + 1);
      setPontosNos(0);
      setPontosEles(0);
    }
  }, [pontosNos, pontosEles]);

  const somar = (time, valor) => {
    if (time === 'nos') setPontosNos(pontosNos + valor);
    else setPontosEles(pontosEles + valor);
  };

  const subtrair = (time) => {
    if (time === 'nos' && pontosNos > 0) setPontosNos(pontosNos - 1);
    else if (time === 'eles' && pontosEles > 0) setPontosEles(pontosEles - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador de Truco</Text>

      <View style={styles.placarContainer}>
        {/* TIME NÓS */}
        <View style={styles.timeBox}>
          <Text style={styles.label}>Nós</Text>
          <Text style={styles.pontuacao}>{pontosNos}</Text>
          
          <View style={styles.controlesSimples}>
            <Button title=" +1 " onPress={() => somar('nos', 1)} color="#4CAF50" />
            <Button title=" -1 " onPress={() => subtrair('nos')} color="#F44336" />
          </View>
          
          <View style={styles.botoesTruco}>
            <Button title="TRUCO" onPress={() => somar('nos', 3)} color="#FF9800" />
            <Button title="6" onPress={() => somar('nos', 6)} color="#FF5722" />
          </View>

          {/* NOVIDADE ETAPA 4 */}
          <View style={styles.vitoriaBox}>
            <Text style={styles.vitoriaLabel}>Vitórias</Text>
            <Text style={styles.vitoriaValor}>{vitoriasNos}</Text>
          </View>
        </View>

        {/* TIME ELES */}
        <View style={styles.timeBox}>
          <Text style={styles.label}>Eles</Text>
          <Text style={styles.pontuacao}>{pontosEles}</Text>
          
          <View style={styles.controlesSimples}>
            <Button title=" +1 " onPress={() => somar('eles', 1)} color="#4CAF50" />
            <Button title=" -1 " onPress={() => subtrair('eles')} color="#F44336" />
          </View>
          
          <View style={styles.botoesTruco}>
            <Button title="TRUCO" onPress={() => somar('eles', 3)} color="#FF9800" />
            <Button title="6" onPress={() => somar('eles', 6)} color="#FF5722" />
          </View>

          {/* NOVIDADE ETAPA 4 */}
          <View style={styles.vitoriaBox}>
            <Text style={styles.vitoriaLabel}>Vitórias</Text>
            <Text style={styles.vitoriaValor}>{vitoriasEles}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Zerar Tudo" onPress={() => {
          setPontosNos(0);
          setPontosEles(0);
          setVitoriasNos(0);
          setVitoriasEles(0);
        }} color="#607D8B" />
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
    paddingTop: 50
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  timeBox: {
    alignItems: 'center',
    width: '45%',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  pontuacao: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#2196F3',
    marginVertical: 10,
  },
  controlesSimples: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  botoesTruco: {
    width: '100%',
    gap: 10,
  },
  vitoriaBox: {
    marginTop: 25,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  vitoriaLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#666',
  },
  vitoriaValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    marginTop: 40,
  }
});