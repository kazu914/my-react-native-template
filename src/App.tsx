import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Route from './routes';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};
