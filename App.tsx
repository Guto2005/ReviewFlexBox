import { SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Home } from './screens/Home';

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
  <StatusBar />
  <Home />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight || 0,
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
