
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
      desctxt: "Oliver Queen (Stephen Amell) é um milionário que fica em uma ilha durante 5 anos após um naufrágio do qual ele foi o único sobrevivente. Entre os mortos estava Sara Lance (Caity Lotz), a irmã mais nova de sua namorada, com quem estava tendo um caso, e Robert Queen, seu pai. Ao retornar à Starling City, ele busca reconciliar com sua antiga namorada, Laurel Lance (Katie Cassidy), corrigir os erros da família Queen em Starling City.",
      genero:"GENERO:",
      generotxt:"Aventura/Ação",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,6/5,0",
    },
    {
      id:"2",
      imagem: require("../assets/Serie/obx.jpg"),
      titulo: "Outer Banks",
      desc: "DESCRIÇÃO",
      desctxt:  "Outer Banks acompanha um grupo de adolescentes na Carolina do Norte: John B(Chase Stokes), Sarah Cameron (Madelyn Cline), Kiara Carreira(Madison Bailey), JJ Maybank(Rudy Pankow), que são conhecidos como 'Pogues' e estão determinados a descobrir o que aconteceu com o pai desaparecido do líder do grupo, John B. Ao longo do caminho, eles descobrem um tesouro lendário que está ligado ao pai do rapaz.",
      genero:"GENERO:",
      generotxt:"Aventura",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,4/5,0",
    },
    {
      id:"3",
      imagem: require("../assets/Serie/b99.jpg"),
      titulo: "Brooklyn Nine Nine",
      desc: "DESCRIÇÃO",
      desctxt:"Situado na 99.ª delegacia fictícia do Departamento de Polícia de Nova York, no Brooklyn, Brooklyn Nine-Nine segue uma equipe de detetives liderados pelo capitão Raymond Holt (Andre Braugher), recém-nomeado e muito sério. Os detetives incluem Jake Peralta (Andy Samberg), que tem uma alta taxa de prisões bem-sucedidas e casos resolvidos, apesar de sua atitude relaxada, despreocupada e (às vezes) infantil. Ele finalmente se apaixona por sua parceira severa, nerd, amável, mas adorável, Amy Santiago (Melissa Fumero).",
      genero:"GENERO:",
      generotxt:"Comédia",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt:"4,6/5,0",
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




// "Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça."
// "Oliver Queen (Stephen Amell) é um milionário que fica em uma ilha durante 5 anos após um naufrágio do qual ele foi o único sobrevivente. Entre os mortos estava Sara Lance (Caity Lotz), a irmã mais nova de sua namorada, com quem estava tendo um caso, e Robert Queen, seu pai. Ao retornar à Starling City, ele busca reconciliar com sua antiga namorada, Laurel Lance (Katie Cassidy), corrigir os erros da família Queen em Starling City.",

