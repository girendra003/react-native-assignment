import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Details2 from './details2';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Details2} />
    </Tab.Navigator>
  );
}