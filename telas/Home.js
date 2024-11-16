import { AccessibilityInfo, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import style from "../style";
import { useEffect } from 'react';

const Botao = ({ onPress, text, hint }) => (
    <TouchableOpacity
        accessibilityHint={hint}
        accessibilityRole="button"
        style={style.btn}
        onPress={onPress}
    >
        <Text style={style.textoBtn}>{text}</Text>
    </TouchableOpacity>
);

export default function Home({ navigation }) {
    useEffect(() => {
        AccessibilityInfo.announceForAccessibility("Tela inicial do GusTask")
    }, []);
    return (
        <View style={style.tela}>

            <Image
                source={require("../assets/icone.png")}
                style={style.iconeHome}
                accessibilityLabel="Ícone de checklist, mostrando uma prancheta com três itens marcados como concluídos em um fundo azul claro."
                accessibilityHint="Ícone do aplicativo GusTask"
                accessibilityRole="image"
            />

            <Text
                style={style.bmv}
                accessibilityHint="Mensagem de boas-vindas"
                accessibilityRole="text"
            >
                Bem-vindo ao GusTask{'\n'}{'\n'}
                Estamos felizes em tê-lo conosco! Com o GusTask, você pode organizar suas tarefas diárias de maneira fácil, prática e eficiente. Nosso objetivo é se manter produtivo e alcançar seus objetivos, com um passo de cada vez.{'\n'}{'\n'}
                Pronto para começar? Vamos lá!
            </Text>

            <Botao
                onPress={() => navigation.navigate("Cadastrar")}
                text="CADASTRAR"
                hint="Toque para criar uma conta no GusTask"
            />

            <Botao
                onPress={() => navigation.navigate("Login")}
                text="LOGIN"
                hint="Toque para fazer login em sua conta do GusTask"
            />
        </View>
    )
}