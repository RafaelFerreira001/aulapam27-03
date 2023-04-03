import{ StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

export default function Nike(props) {
    return (
    <ScrollView>
        <ImageBackground
          style={styles.container}
          resizeMode='repeat'
          source={{uri:'https://img.freepik.com/vetores-premium/logotipo-de-tenis-de-sapatos-com-design-de-ilustracao-de-icone-vetorial-de-linha-de-estilo-minimalista_629573-621.jpg?w=740'}}
          
          >
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/nike/1.png")}}
            
          >
            <Text style={styles.card_titulo}>Nike Air Winflo 9 Rosa</Text>
            <Text style={styles.card_valor}>Apenas - R$ 341,99</Text>
          </ImageBackground>

          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/nike/2.png")}}
            
          >
            <Text style={styles.card_titulo}>Nike Air Winflo 9 Preto</Text>
            <Text style={styles.card_valor}>Apenas - R$ 484,49</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/nike/3.png")}}
          >
            <Text style={styles.card_titulo}>Nike Renew Ride 3</Text>
            <Text style={styles.card_valor}>Apenas - R$ 427,49</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/nike/4.png")}}
          >
            <Text style={styles.card_titulo}>Nike Renew Ride 4</Text>
            <Text style={styles.card_valor}>Apenas - R$ 417,99</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/nike/5.png")}}
          >
            <Text style={styles.card_titulo}>Nike Renew Run 3</Text>
            <Text style={styles.card_valor}>Apenas - R$ 427,49</Text>
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
    alignItems: 'center',

  },
  card_tenis:{
    width: 290,
    height: 160,
    backgroundColor:'#FFF',
    marginBottom: 50,
    borderRadius: 10,
    
  },
  card_titulo:{
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor:'#0f0f0fdb',
    paddingLeft:10,
    color:'#FFF',
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