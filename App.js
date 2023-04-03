import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Nike from './Components/Nike';
import Adidas from './Components/Adidas';
import Mizuno from './Components/MIzuno';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Nike' component={Nike}/>
        <Drawer.Screen name='Adidas' component={Adidas}/>
        <Drawer.Screen name='Mizuno' component={Mizuno}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}