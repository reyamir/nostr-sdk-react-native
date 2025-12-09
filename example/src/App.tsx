import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Keys } from '../../src';

export default function App() {
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    let keys = Keys.generate();
    setPublicKey(keys.publicKey().toBech32());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Public Key: {publicKey}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
