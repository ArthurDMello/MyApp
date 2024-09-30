import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput} from 'react-native';

const TextInputExample = () => {
  const [number, onChangeNumber] = React.useState('');

  const validacao = () => {
    const value = parseInt(number);

    if (value === 3) {
      Alert.alert('Você Acertou o Número!');
    } else {
      Alert.alert('Você Errou o Número!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite um Número"
        keyboardType="numeric"
      />

       <Button style={styles.button}
        title="Clique!"
        color="#f194ff"
        onPress={validacao}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    
  },
  input: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default TextInputExample;