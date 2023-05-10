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
      desctxt: "Peppa, uma simpática e carinhosa porquinha cor-de-rosa, vive na Europa ao lado dos pais e do irmão caçula George. Os passatempos favoritos de Peppa incluem jogar, experimentar roupas e, claro, pular com os dois pés na lama. Carinhosa e brincalhona, ela adora rir, mas às vezes tem um temperamento ruim. Cada um de seus amigos representa uma espécie diferente de mamífero, dentre eles tem: coelho, elefante, cachorro, etc.",
      genero:"GENERO:",
      generotxt:"Animação",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,0/5,0",
    },
    {
      id:"2",
      imagem: require("../assets/Desenho/bob.jpg"),
      titulo: "Bob Esponja Calça Quadrada",
      desc: "DESCRIÇÃO",
      desctxt: "Bob Esponja Calça Quadrada é uma esponja do mar que mora em uma casa de abacaxi. Junto ao melhor amigo, Patrick Estrela, que mora de baixo de uma rocha, ambos sempre tiram a paciência do vizinho Lula Molusco. Bob Esponja trabalha no Siri Cascudo, para o Sr. Sirigueijo, fazendo os famosos hambúrgueres de siri, e do outro lado da rua tem o Plakton, arque rival do Siriqueijo, que esta sempe tentando roubar a formula secreta do Hamburguer de siri.",
      genero:"GENERO:",
      generotxt:"Animação",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,3/5,0",
    },
    {
      id:"3",
      imagem: require("../assets/Desenho/spc.jpg"),
      titulo: "Super Shock",
      desc: "DESCRIÇÃO",
      desctxt: "Virgil Hawkins é um jovem inteligente e bem-humorado que vive na cidade de Dakota, com o pai e a irmã. O jovem Virgil Hawkins ganha incríveis poderes eletromagnéticos após ser exposto a um estranho gás.Agora com a ajuda do seu melhor amigo Osgood, ele assume o manto de Super Choque e oferece ajuda aos que precisam dela, além de enfrentar diversos vilões e peoteger sua cidade de todo o mal que a rodeia.",
      genero:"GENERO:",
      generotxt:"Animação/Aventura",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,1/5,0",
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
                  avaliacao={item.avaliacao}
                  avaliacaotxt={item.avaliacaotxt}

              />
            }
            keyExtractor={item => item.id}
          />        
        </View>
    </ScrollView>
  );
}
