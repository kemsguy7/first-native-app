import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from '@/components/ImageViewer';

const placeHolderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
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
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  text: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',

    color: '#fff',
  },
});
