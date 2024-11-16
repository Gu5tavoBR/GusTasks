import { Vibration, AccessibilityInfo, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import style from "../style";
import { useEffect, useState } from "react";

export default function Cadastrar({ navigation }) {
    useEffect(() => {
        AccessibilityInfo.announceForAccessibility("Tela de cadastro");
    }, []);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [criado, setCriado] = useState(false);
    const [texto, setTexto] = useState("");

    const atualizarTexto = (mensagem, sucesso) => {
        setTexto(mensagem);
        setCriado(sucesso);
        AccessibilityInfo.announceForAccessibility(mensagem);
        setTimeout(() => setTexto(""), 5000);
    };

    const verificarECriarUsuario = () => {
        fetch(`https://api-todolist-rho.vercel.app/verificarusuario?email=${email}&senha=${senha}`)
            .then(response => response.json())
            .then(data => {
                if (!data.success) return atualizarTexto("Ops! E-mail já registrado, tente de novo...", false);
                
                fetch(`https://api-todolist-rho.vercel.app/criarusuario?name=${nome}&email=${email}&password=${senha}`)
                    .then(() => {
                        atualizarTexto("Conta criada com sucesso!", true);
                        navigation.navigate("Login");
                        Vibration.vibrate(2000, 1000, 2000)
                    });
            });
    };

    const autenticarCadastro = () => {
        if (!nome || !email || !senha) {
            Vibration.vibrate(500);
            atualizarTexto("Todos os campos são obrigatórios!", false);
            return;
        }
        if (!/@(gmail|hotmail)\.com$/.test(email)) {
            Vibration.vibrate(500);
            setTimeout(() => {
                Vibration.vibrate(500);
            }, 490)
            atualizarTexto("E-mail inválido!", false);
            return;
        }
        if (senha.length <= 6) {
            Vibration.vibrate(500);
            setTimeout(() => {
                Vibration.vibrate(500);
            }, 550)
            atualizarTexto("A senha deve ter mais de 6 caracteres!", false);
        return;
        }

        verificarECriarUsuario();
    };

    return (
        <View style={style.tela2}>
            <Text style={style.titulo}>Cadastrar-se nas contas do Gugu</Text>
            <View style={style.form}>
                <View style={style.inputs}>
                    <Text
                    style={style.label}
                    >
                        Nome:
                        </Text>
                    <TextInput
                        style={[style.input, { backgroundColor: '#fff', width: "75%" }]}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite o seu nome"
                        autoCapitalize="sentences"
                        inputMode="text"
                    />
                </View>
                <View style={style.inputs}>
                    <Text style={style.label}>E-mail:</Text>
                    <TextInput
                        style={[style.input, { backgroundColor: '#fff', width: "75%" }]}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite o seu e-mail"
                        keyboardType="email-address"
                        inputMode="email"
                    />
                </View>
                <View style={style.inputs}>
                    <Text style={style.label}>Senha:</Text>
                    <TextInput
                        style={[style.input, { backgroundColor: '#fff', width: "75%" }]}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Digite a sua senha"
                        secureTextEntry
                        inputMode="text"
                    />
                </View>
            </View>
            <Text
                style={[style.aviso, { color: criado ? 'rgb(0,255,0)' : 'rgb(255,0,0)' }]}
                accessibilityLiveRegion="polite"
            >
                {texto}
            </Text>
            <TouchableOpacity
                style={style.btn}
                onPress={autenticarCadastro}
                accessibilityHint="TOC para criar uma conta no GusTasks"
            >
                <Text style={style.textoBtn}>CRIAR CONTA</Text>
            </TouchableOpacity>
        </View>
    );
}