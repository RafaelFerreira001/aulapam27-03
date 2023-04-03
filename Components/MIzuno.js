import{ StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

export default function Mizuno(props) {
    return (
    <ScrollView>
        <ImageBackground
          style={styles.container}
          resizeMode='repeat'
          source={{uri:'https://img.freepik.com/vetores-premium/logotipo-de-tenis-de-sapatos-com-design-de-ilustracao-de-icone-vetorial-de-linha-de-estilo-minimalista_629573-621.jpg?w=740'}}
          >
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Mizuno/11.png")}}
            
          >
            <Text style={styles.card_titulo}>Mizuno Cometa</Text>
            <Text style={styles.card_valor}>Apenas - R$ 199,40</Text>
          </ImageBackground>

          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Mizuno/12.png")}}
            
          >
            <Text style={styles.card_titulo}>Mizuno Cometa</Text>
            <Text style={styles.card_valor}>Apenas - R$ 249,90</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Mizuno/11.png")}}
            
          >
            <Text style={styles.card_titulo}>Mizuno Cometa</Text>
            <Text style={styles.card_valor}>Apenas - R$ 199,40</Text>
          </ImageBackground>

          <ImageBackground
            style={styles.card_tenis}
            source={{uri:require("../assets/Tenis/Mizuno/12.png")}}
            
          >
            <Text style={styles.card_titulo}>Mizuno Cometa</Text>
            <Text style={styles.card_valor}>Apenas - R$ 249,90</Text>
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