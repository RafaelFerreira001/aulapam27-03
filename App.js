import { StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
        <ImageBackground
          style={styles.container}
          resizeMode='repeat'
          source={{uri:'https://i.pinimg.com/736x/b4/6f/21/b46f2199541db657369996d6721c74fa.jpg'}}
          >
          <ImageBackground
          style={styles.card_veiculo}
          source={{uri:'https://i.pinimg.com/736x/d9/30/6f/d9306f0733d1d5cc3fb2264823c47e86.jpg'}}
          >
            <Text style={styles.card_titulo}>OPALA DO THEU</Text>
            <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
          </ImageBackground>
          <ImageBackground
          style={styles.card_veiculo}
          source={{uri:'https://st.automobilemag.com/uploads/sites/5/2018/04/2019-Lamborghini-Urus-in-Dubai-2.jpg'}}
          >
            <Text style={styles.card_titulo}>URUS DO RAFA</Text>
            <Text style={styles.card_valor}>Apenas - R$2.400.000,00</Text>
          </ImageBackground>
          <ImageBackground
          style={styles.card_veiculo}
          source={{uri:'https://i.pinimg.com/736x/d9/30/6f/d9306f0733d1d5cc3fb2264823c47e86.jpg'}}
          >
            <Text style={styles.card_titulo}>OPALA DO THEU</Text>
            <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
          </ImageBackground>
          <ImageBackground
          style={styles.card_veiculo}
          source={{uri:'https://st.automobilemag.com/uploads/sites/5/2018/04/2019-Lamborghini-Urus-in-Dubai-2.jpg'}}
          >
            <Text style={styles.card_titulo}>URUS DO RAFA</Text>
            <Text style={styles.card_valor}>Apenas - R$2.400.000,00</Text>
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
  card_veiculo:{
    width: 360,
    height: 250,
    backgroundColor:'#FFF',
    marginBottom: 20
  },
  card_titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'#0f0f0fdb',
    paddingLeft:10,
    color:'#FFF'
  },
  card_valor:{
    fontSize: 20,
    backgroundColor:'#0f0f0fdb',
    color:'green',
    marginTop: 197,
    textAlign:'center'
    
    
  },
  
});
