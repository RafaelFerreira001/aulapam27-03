import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Nike() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Tenis/nike/1.png"),
      modelo: "Nike Air Winflo 9 Rosa",
      valor: "R$ 341,99",
    },
    {
      id:"2",
      imagem: require("../assets/Tenis/nike/2.png"),
      modelo: "Nike Air Winflo 9 Preto",
      valor:  "R$ 484,49",
    },
    {
      id:"3",
      imagem: require("../assets/Tenis/nike/3.png"),
      modelo: "Nike Renew Ride 3",
      valor:  "R$ 427,49",
    },
    {
      id:"4",
      imagem: require("../assets/Tenis/nike/4.png"),
      modelo: "Nike Renew Run 4",
      valor:  "R$ 427,49",
    },
    {
      id:"5",
      imagem: require("../assets/Tenis/nike/5.png"),
      modelo: "Nike Renew Run 5",
      valor:  "R$ 407,49",
    }
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
