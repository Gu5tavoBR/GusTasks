import { StyleSheet, View, Image, Text, TouchableOpacity,  } from "react-native";
import style from "../style";;
import AS from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    return (
        <View style={style.tela} accessibilityHint="Tela inicial">
            <Image source={require("./../assets/icone.png")} style={style.iconeHome} accessibilityLabel="Ícone do aplicativo"  />
            <Text style={style.bmv}>
                Bem-vindo ao GusTask{'\n'}{'\n'}Estamos felizes em tê-lo conosco! Com o GusTask, você pode organizar suas tarefas diárias de maneira fácil, prática e eficiente. Nosso objetivo é se manter produtivo e alcançar seus objetivos, com um passo de cada vez.{'\n'}{'\n'}Pronto para começar? Vamos lá!
            </Text>
            <TouchableOpacity accessibilityHint="Toque para criar uma conta" accessibilityLabel="Cadastrar" style={style.btn} onPress={() => navigation.navigate("Cadastrar")}>
                <Text style={style.textoBtn}>
                    CADASTRAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityHint="Toque para logar-se a uma conta" accessibilityLabel="Login" style={style.btn} onPress={() => navigation.navigate("Login")}>
                <Text style={style.textoBtn}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
};