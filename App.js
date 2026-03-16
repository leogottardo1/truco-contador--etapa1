import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);
  const [vitoriasNos, setVitoriasNos] = useState(0);
  const [vitoriasEles, setVitoriasEles] = useState(0);

  // Lógica de vencedor automático
  useEffect(() => {
    if (pontosNos >= 12) {
      Alert.alert("Vitória!", "O time NÓS ganhou esta partida!");
      setVitoriasNos(vitoriasNos + 1);
      reiniciarPartida();
    } else if (pontosEles >= 12) {
      Alert.alert("Vitória!", "O time ELES ganhou esta partida!");
      setVitoriasEles(vitoriasEles + 1);
      reiniciarPartida();
    }
  }, [pontosNos, pontosEles]);

  // Função Reiniciar: Zera pontuação, mantém vitórias
  const reiniciarPartida = () => {
    setPontosNos(0);
    setPontosEles(0);
  };

  // Função Novo Jogo: Zera tudo
  const novoJogo = () => {
    reiniciarPartida();
    setVitoriasNos(0);
    setVitoriasEles(0);
  };

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
          <View style={styles.vitoriaBox}>
            <Text style={styles.vitoriaLabel}>Vitórias</Text>
            <Text style={styles.vitoriaValor}>{vitoriasEles}</Text>
          </View>
        </View>
      </View>

      {/* NOVIDADE ETAPA 5: Controles da Partida */}
      <View style={styles.footer}>
        <View style={styles.buttonSpacing}>
          <Button title="Reiniciar Partida" onPress={reiniciarPartida} color="#2196F3" />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title="Zerar Tudo (Novo Jogo)" onPress={novoJogo} color="#607D8B" />
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
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  vitoriaLabel: {
    fontSize: 12,
    color: '#666',
  },
  vitoriaValor: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    width: '80%',
  },
  buttonSpacing: {
    marginVertical: 5,
  }
});