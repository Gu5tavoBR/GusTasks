import { AccessibilityInfo, Text, StyleSheet, View, TextInput, TouchableOpacity  } from "react-native";
import style from "../style";
import { useState } from "react";
import AS from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [logado, setLogado] = useState(false);
    const [texto, setTexto] = useState("")

    const verificar = () => {
          fetch(`https://api-todolist-rho.vercel.app/login?email=${email}&password=${senha}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                            AS.setItem('id', JSON.stringify(data.user.id))
                            AS.setItem('name', data.user.name)
                    setLogado(true)
                    setTexto("Conta logada com sucesso!")
                    AccessibilityInfo.announceForAccessibility("Conta logada com sucesso!")
                    setTimeout(() => {
                        setTexto("");
                        navigation.navigate("Tabs")
                    }, 5000);
                    AS.setItem("logado", "true")
                } else {
                    setTexto("ops! Você está tentando logar em uma conta fantasna!")
                    setTimeout(() => setTexto(""), 5000)
                    AccessibilityInfo.announceForAccessibility("ops! Você está tentando logar em uma conta fantasna!")
                    setLogado(false)
                }
             })
     }

     const AutenticarLogin = () => {
        if(email !== '' || senha !== '') {
            if(email.includes('@gmail.com') || email.includes('@hotmail.com')){
                if (senha.length > 6) {
                    verificar();
                } else {
                    setLogado(false);
                    setTexto("A senha deve ter mais de 6 caracteres!");
                    AccessibilityInfo.announceForAccessibility("A senha deve ter mais de 6 caracteres!")
                    setTimeout(() => setTexto(""), 5000);
                }
            } else {
                setLogado(false);
                setTexto("E-mail inválido!");
                AccessibilityInfo.announceForAccessibility("E-mail inválido!")
                setTimeout(() => setTexto(""), 5000);
            }
        } else {
            setLogado(false);
            setTexto("Todos os campos são obrigatórios!");
            AccessibilityInfo.announceForAccessibility("Todos os campos são obrigatórios!")
            setTimeout(() => setTexto(""), 5000);
        }
    };

    return (
        <View style={style.tela2}>
            <Text style={style.titulo}>
                Fazer login nas contas do Gugu
            </Text>
            <View style={style.form}>
                <View style={style.inputs}>
                    <View style={{width: "19%",}}>
                    <Text style={style.label}>
                        E-mail:
                    </Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "75%",}}>
                    <TextInput style={style.input} value={email} placeholder="Digite o seu e-mail" onChangeText={(valor) => setEmail(valor)} keyboardType="email-address" />
                    </View>
                </View>
                <View style={style.inputs}>
                    <View style={{width: "19%",}}>
                    <Text style={style.label}>
                        Senha:
                    </Text>
                    </View>
                    <View style={{backgroundColor: '#fff', width: "75%",}}>
                    <TextInput style={style.input} value={senha} placeholder="Digite a sua senha" onChangeText={(valor) => setSenha(valor)} keyboardType="visible-password" />
                    </View>
                </View>
            </View>
                <Text style={[style.aviso, {color: logado ? 'rgb(0,255,0)' : 'rgb(255,0,0)'}]}>
                    {texto}
                </Text>
                <TouchableOpacity style={style.btn} onPress={AutenticarLogin}>
                    <Text style={style.textoBtn}>
                        ENTRAR NA CONTA
                    </Text>
                </TouchableOpacity>
        </View>
    );
}