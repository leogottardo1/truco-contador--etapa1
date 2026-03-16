import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  // Função genérica para somar pontos
  const somar = (time, valor) => {
    if (time === 'nos') setPontosNos(pontosNos + valor);
    else setPontosEles(pontosEles + valor);
  };

  // Função para subtrair (não deixa ficar negativo)
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
        </View>
      </View>

      {/* Botões de 9 e 12 para ambos no rodapé para economizar espaço */}
      <View style={styles.footerApostas}>
        <Text style={styles.textoAposta}>Aumentar para:</Text>
        <View style={styles.row}>
           <Button title=" NOVE (9) " onPress={() => {}} disabled color="#E91E63" /> 
           <Button title=" DOZE (12) " onPress={() => {}} disabled color="#9C27B0" />
        </View>
        <Text style={{fontSize: 10, marginTop: 5}}>* Clique nos botões acima de cada time para pontuar</Text>
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
  footerApostas: {
    marginTop: 40,
    alignItems: 'center',
  },
  textoAposta: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  }
});