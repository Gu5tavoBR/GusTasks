import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity,  } from "react-native";
import style from "../style";
import AS from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
    const [nome, setNome] = useState("");

    useEffect(() => {
        AS.getItem("name").then((nome) => setNome(nome)
        );
      }, []);

    return (
     <View style={style.tela2}>
        <View style={style.cabecalho}>
            <Text style={style.nome}>
                {nome}
            </Text>
        </View>
        <ScrollView style={style.containerButtons}>
            <TouchableOpacity style={style.perfil} onPress={() => {
                AS.setItem('logado', "false");
                navigation.navigate("Home")
            }}>
                <AntDesign name="logout" size={24} color="rgb(0,122,204)" />
                <Text style={style.textoPerfil}>
                    Sair da conta
                </Text>
            </TouchableOpacity>
        </ScrollView>
     </View>   
    )
}