import{ StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

export default function Adidas(props) {
    return (
    <ScrollView>
        <ImageBackground
          style={styles.container}
          resizeMode='repeat'
          source={{uri:'https://img.freepik.com/vetores-premium/logotipo-de-tenis-de-sapatos-com-design-de-ilustracao-de-icone-vetorial-de-linha-de-estilo-minimalista_629573-621.jpg?w=740'}}
          >
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Adidas/6.png")}}
          >
            <Text style={styles.card_titulo}>Adidas Coreracer Masculino</Text>
            <Text style={styles.card_valor}>Apenas - R$ 179,99</Text>
          </ImageBackground>

          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Adidas/7.png")}}
          >
            <Text style={styles.card_titulo}>Adidas Breaknet Masculino</Text>
            <Text style={styles.card_valor}>Apenas - R$ 208,99</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Adidas/8.png")}}
          >
            <Text style={styles.card_titulo}>Adidas Lite Racer Rebold 1</Text>
            <Text style={styles.card_valor}>Apenas - R$ 379,99</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Adidas/9.png")}}
          >
            <Text style={styles.card_titulo}>Adidas Lite Racer Rebold 2</Text>
            <Text style={styles.card_valor}>Apenas - 329,05 </Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Adidas/10.png")}}
          >
            <Text style={styles.card_titulo}>Adidas Lite Racer Rebold 3</Text>
            <Text style={styles.card_valor}>Apenas - R$ 218,49</Text>
          </ImageBackground>
          
      </ImageBackground>
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61647b',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card_tenis:{
    width: 290,
    height: 160,
    backgroundColor:'#FFF',
    marginBottom: 50,
  },
  card_titulo:{
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor:'#0f0f0fdb',
    paddingLeft:10,
    color:'#FFF'
  },
  card_valor:{
    fontSize: 20,
    backgroundColor:'#0f0f0fdb',
    color:'white',
    marginTop: 120,
    textAlign:'center',
    fontWeight: 'bold',
    
    
  },
  
});