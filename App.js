import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Filme from "./components/Filme";
import Mizuno from "./components/Mizuno";
import Serie from "./Components/Serie";



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
          <ItensMenu name="Filme" component={Filme}
          />
          <ItensMenu name="Mizuno" component={Mizuno}/>
          <ItensMenu name="Serie" component={Serie}/>
        </Menu>
      
    </NavigationContainer>
  );
}

