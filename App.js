import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import EditScreen from './screens/EditScreen.js';
import TaskScreen from './screens/TaskScreen.js';


export default function App() {
  // create an instance of the bottom tab navigator using createBottomTabNavigator function
  // this instance will be used to define the structure and configuration of the bottom tab navigation
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({

});
