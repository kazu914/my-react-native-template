import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {HOME} from '../../../constants/routes';

const styles = {
  container: {
    flex: 1,
  },
};

export default function Edit(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button icon="home" onPress={() => navigation.navigate(HOME)}>
        go to home
      </Button>
    </View>
  );
}
