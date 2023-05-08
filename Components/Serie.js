
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Serie() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Serie/arrow.jpg"),
      titulo: "Arqueiro Verde",
      desc: "DESCRIÇÃO",
      desctxt: "Oliver Queen (Stephen Amell) é um milionário que fica em uma ilha durante 5 anos após um naufrágio do qual ele foi o único sobrevivente. Entre os mortos estava Sara Lance (Caity Lotz), a irmã mais nova de sua namorada, com quem estava tendo um caso, e Robert Queen, seu pai. Ao retornar à Starling City, ele busca reconciliar com sua antiga namorada, Laurel Lance (Katie Cassidy), corrigir os erros da família Queen.",
      genero:"GENERO:",
      generotxt:"Aventura/Ação",
    },
    {
      id:"2",
      imagem: require("../assets/Serie/obx.jpg"),
      titulo: "Outer Banks",
      desc: "DESCRIÇÃO",
      desctxt:  "Outer Banks acompanha um grupo de adolescentes na Carolina do Norte, que são conhecidos como 'Pogues' e estão determinados a descobrir o que aconteceu com o pai desaparecido do líder do grupo, John B. (Chase Stokes). Ao longo do caminho, eles descobrem um tesouro lendário que está ligado ao pai do rapaz. Essa é especial para os fãs da série!",
      genero:"GENERO:",
      generotxt:"Aventura",
    },
    {
      id:"3",
      imagem: require("../assets/Filme/FilmeCD.jpg"),
      titulo: "Creed I - Nascido para lutar",
      desc: "DESCRIÇÃO",
      desctxt:"Adonis vai para Philadelphia, o local da lendária luta de Apollo Creed contra um aguerrido novato chamado Rocky Balboa. Já na Cidade do Amor Fraternal, Adonis encontra Rocky (Stallone) e pede para que ele seja seu treinador. Apesar de sua insistência em se afastar do mundo das lutas por bons motivos, Rocky enxerga em Adonis a força e a determinação que ele conheceu em Apollo - seu feroz rival que acabou se tornando seu melhor amigo.",
      genero:"GENERO:",
      generotxt:"Ação",
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