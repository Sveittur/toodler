import { StyleSheet, Text, View } from 'react-native';
import listMaker from './src/components/ListMaker/ListMaker'
import BoardList from './src/components/BoardView/BoardList';
import ListView from './src/components/ListView/ListView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const boards = listMaker('boards')
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BoardList" component={BoardList} initialParams={{boards: boards}} options={{ headerShown: false }}/>
        <Stack.Screen name="ListView" component={ListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#524632',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: '#EAF0CE',
    margin:10,
  },


});