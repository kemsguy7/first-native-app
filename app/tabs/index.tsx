import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My first react native app.</Text>
      <Link href='/tabs/about' style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',

    color: '#fff',
  },
});
