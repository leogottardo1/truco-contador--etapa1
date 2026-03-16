import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0); // Começando em 0 para ser um marcador padrão

  function aumentarContagem() {
    setContador(contador + 1);
  }

  function diminuirContagem() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>
      
      <Text style={styles.valor}>{contador}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button onPress={aumentarContagem} title=" + " color="#4CAF50" />
        </View>
        
        <View style={styles.buttonWrapper}>
          <Button onPress={diminuirContagem} title=" - " color="#F44336" />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  valor: {
    fontSize: 80, // Destaque para o número
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20, // Espaçamento moderno entre botões
  },
  buttonWrapper: {
    width: 100, // Garante que os botões tenham o mesmo tamanho
  }
});