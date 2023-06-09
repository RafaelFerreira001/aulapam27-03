import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const CardTenis = ({imagem,titulo,desc,desctxt,genero,generotxt,avaliacao,avaliacaotxt})=>{
    let inteiro = parseInt(avaliacaotxt);
    let resto  = avaliacaotxt - inteiro;
    let estrela = [];
    for(let id = 0; id < inteiro; id++){
        estrela.push(<FontAwesome name="star" size={24} color="black" />);
    }
    if(resto > 0){
        estrela.push(<FontAwesome name="star-half-full" size={24} color="black" />);
    }
   
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
            <Text style={estilo.filme_avaliacao}>{avaliacao}</Text>
            <Text style={estilo.filme_avaliacaotxt}>{estrela.map(e => (e))}</Text>
           
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    titulo:{
        width: 350,
        height: 500,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom:413,

        
        
               
    },
    filme_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"black",
        color: "#A15CF8",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: "center",
    },
    filme_descricao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#222222",
        color: "#A15CF8",
        textAlign: "center",
        marginTop: 465
        
    },
    filme_desctxt:{
        fontSize: 16,
        padding:5,      
        backgroundColor:"#8B82F4",
        color: "black",
        textAlign: "center",
        
        
    },
    filme_genero:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#222222",
        color: "#A15CF8",
        textAlign: "center",
    },
    filme_generotxt:{
        fontSize: 16,
        padding:5,       
        backgroundColor:"#8B82F4",
        color: "#FFA643",
        textAlign: "center",
    },
    filme_avaliacao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#2C2C2C",
        color: "#A15CF8",
        textAlign: "center",
    },
    filme_avaliacaotxt:{
        fontSize: 16,
        padding:5,       
        backgroundColor:"#8B82F4",
        color: "black",
        textAlign: "center",
    },

    
    
  });
  
  export default CardTenis;