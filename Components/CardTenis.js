import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';


const CardTenis = ({imagem,titulo,desc,desctxt,genero,generotxt})=>{
    return(
        <ImageBackground
            style={estilo.titulo}
            source={imagem}
            borderRadius={10}
            resizeMode="cover"
        >
            <Text style={estilo.filme_titulo}>{titulo}</Text>
            <Text style={estilo.filme_descricao}>{desc}</Text>
            <Text style={estilo.filme_desctxt}>{desctxt}</Text>
            <Text style={estilo.filme_genero}>{genero}</Text>
            <Text style={estilo.filme_desctxt}>{generotxt}</Text>
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    titulo:{
        width: 350,
        height: 500,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom:340,

        
        
               
    },
    filme_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"black",
        color: "pink",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: "center",
    },
    filme_descricao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "pink",
        textAlign: "center",
        marginTop: 465
        
    },
    filme_desctxt:{
        fontSize: 16,
        padding:5,       
        backgroundColor:"pink",
        color: "black",
        textAlign: "center",
        
        
    },
    filme_genero:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "pink",
        textAlign: "center",
        
        
    },
    filme_generotxt:{
        fontSize: 16,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "pink",
        textAlign: "center",
        
        
    },

    
    
  });
  
  export default CardTenis;