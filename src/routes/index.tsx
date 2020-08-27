import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Edit} from '../components/pages';
import {EDIT, HOME} from '../constants/routes';

const Stack = createStackNavigator();

export default function MainRoute(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={EDIT} component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
