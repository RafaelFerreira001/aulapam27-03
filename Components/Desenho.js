import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Desenho() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Desenho/pepa.jpg"),
      titulo: "Peppa Pig",
      desc: "DESCRIÇÃO",
      desctxt: "Peppa, uma simpática e carinhosa porquinha cor-de-rosa, vive na Europa ao lado dos pais e do irmão caçula George. Os passatempos favoritos de Peppa incluem jogar, experimentar roupas e, claro, pular com os dois pés na lama. Carinhosa e brincalhona, ela adora rir, mas às vezes tem um temperamento ruim. Cada um de seus amigos representa uma espécie diferente de mamífero.",
      genero:"GENERO:",
      generotxt:"Aventura",
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
                  titulo={item.titulo}
                  desc={item.desc}
                  desctxt={item.desctxt}
                  genero={item.genero}
                  generotxt={item.generotxt}

              />
            }
            keyExtractor={item => item.id}
          />        
        </View>
    </ScrollView>
  );
}
