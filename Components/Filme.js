import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Filme() {

  
  const produtos = [
    

    {
      id:"1",
      imagem: require("../assets/Filme/FilmeJP.jpg"),
      titulo: "Jurassic Park - O Parque dos Dinossauros",
      desc: "DESCRIÇÃO",
      desctxt: "Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça.",
      genero:"GENERO:",
      generotxt:"Aventura",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 4.5,
    },
    {
      id:"2",
      imagem: require("../assets/Filme/FilmeVF.jpg"),
      titulo: "Velozes e Furiosos 5 Operação Rio",
      desc: "DESCRIÇÃO",
      desctxt:  "Desde que o ex-policial Brian O'Conner e Mia Toretto libertaram Dom da prisão, eles viajam pelo mundo para fugir das autoridades. No Rio de Janeiro, eles são obrigados a fazer um último trabalho antes de ganhar sua liberdade definitiva. Brian e Dom montam uma equipe de elite de pilotos de carro para executar a tarefa, mas precisam enfrentar um empresário corrupto e também um obstinado agente federal norte-americano.",
      genero:"GENERO:",
      generotxt:"Ação",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:4,
    },
    {
      id:"3",
      imagem: require("../assets/Filme/FilmeCD.jpg"),
      titulo: "Creed I - Nascido para lutar",
      desc: "DESCRIÇÃO",
      desctxt:"Adonis vai para Philadelphia, o local da lendária luta de Apollo Creed contra um aguerrido novato chamado Rocky Balboa. Já na Cidade do Amor Fraternal, Adonis encontra Rocky (Stallone) e pede para que ele seja seu treinador. Apesar de sua insistência em se afastar do mundo das lutas por bons motivos, Rocky enxerga em Adonis a força e a determinação que ele conheceu em Apollo - seu feroz rival que acabou se tornando seu melhor amigo.",
      genero:"GENERO:",
      generotxt:"Ação",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:4,
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
