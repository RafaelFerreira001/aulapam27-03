import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Filme from "./components/Filme";
import Desenho from "./Components/Desenho";
import Serie from "./Components/Serie";



const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      
        <Menu screenOptions={{
          drawerLabelStyle: {
            color: "red"    
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            
          },
          drawerActiveBackgroundColor: "#8B82F4",
          drawerInactiveTintColor: "gray",
          drawerActiveTintColor: "black",
          drawerLabelPosition: "beside-icon",
          
          

        }}
        >
          <ItensMenu name="Filme" component={Filme}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="movie-open" size={size} color={"black"} />),
            
          }}
          />
          <ItensMenu name="Desenho" component={Desenho}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="emoticon-excited" size={size} color={"black"} />),
            
          }}/>
          <ItensMenu name="Serie" component={Serie}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="netflix" size={size} color={"black"} />),
            
          }}
          />
          
        </Menu>
      
    </NavigationContainer>
  );
}

