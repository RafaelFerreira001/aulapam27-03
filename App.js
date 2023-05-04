import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import Nike from "./components/Nike";
import Mizuno from "./components/Mizuno";
import Adidas from "./components/Adidas";



const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      
        <Menu screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ccc"              
          },
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveTintColor: "#555",
          tabBarActiveTintColor: "#222",
          tabBarLabelPosition: "beside-icon"

        }}
        >
          <ItensMenu name="Nike" component={Nike}
            options={{
              tabBarIcon:({color, size})=>(<AntDesign name="check" size={size} color={color} />),
              tabBarBadge: 4,
            }}
          />
          <ItensMenu name="Mizuno" component={Mizuno}/>
          <ItensMenu name="Adidas" component={Adidas}/>
        </Menu>
      
    </NavigationContainer>
  );
}

