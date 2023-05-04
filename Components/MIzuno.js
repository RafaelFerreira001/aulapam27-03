import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Mizuno() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Tenis/Mizuno/11.png"),
      modelo: "Mizuno Cometa",
      valor: "R$ 341,99",
    },
    {
      id:"2",
      imagem: require("../assets/Tenis/Mizuno/12.png"),
      modelo: "Mizuno Cometa 2",
      valor:  "R$ 464,49",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={produtos}
          renderItem={({item})=>
            <CardTenis 
                imagem={item.imagem}
                modelo={item.modelo}
                valor={item.valor}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
