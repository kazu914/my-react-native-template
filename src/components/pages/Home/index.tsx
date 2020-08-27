import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {EDIT} from '../../../constants/routes';

const styles = {
  container: {
    flex: 1,
  },
};

export default function Main(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button icon="pencil" onPress={() => navigation.navigate(EDIT)}>
        go to edit
      </Button>
    </View>
  );
}
