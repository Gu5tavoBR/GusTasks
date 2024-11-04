import { AccessibilityInfo, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import style from "../style";
import { useState } from "react";

export default function Cadastrar({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [criado, setCriado] = useState(false);
    const [texto, setTexto] = useState("");

    const verificar = () => {
        fetch(`https://api-todolist-rho.vercel.app/verificarusuario?email=${email}&senha=${senha}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetch(`https://api-todolist-rho.vercel.app/criarusuario?name=${nome}&email=${email}&password=${senha}`)
                        .then(() => {
                            setCriado(true);
                            setTexto("Conta criada com sucesso!");
                            AccessibilityInfo.announceForAccessibility(texto)
                            setTimeout(() => {
                                setTexto("");
                            }, 3000);
                            navigation.navigate("Login");
                        });
                } else {
                    setTexto("Ops! Você está tentando criar uma conta em um e-mail já existente no nosso banco de dados. Por favor, tente de novo...");
                    setTimeout(() => setTexto(""), 5000)
                    AccessibilityInfo.announceForAccessibility("Ops! Você está tentando criar uma conta em um e-mail já existente no nosso banco de dados. Por favor, tente de novo...")
                    setCriado(false);
                }
            });
    };

    const AutenticarCadastro = () => {
        if(nome !== '' || email !== '' || senha !== '') {
            if(email.includes('@gmail.com') || email.includes('@hotmail.com')){
                if (senha.length > 6) {
                    verificar();
                } else {
                    setCriado(false);
                    setTexto("A senha deve ter mais de 6 caracteres!");
                    AccessibilityInfo.announceForAccessibility("A senha deve ter mais de 6 caracteres!")
                    setTimeout(() => setTexto(""), 5000);
                }
            } else {
                setCriado(false);
                setTexto("E-mail inválido!");
                AccessibilityInfo.announceForAccessibility("E-mail inválido!")
                setTimeout(() => setTexto(""), 5000);
            }
        } else {
            setCriado(false);
            setTexto("Todos os campos são obrigatórios!");
            AccessibilityInfo.announceForAccessibility("Todos os campos são obrigatórios!")
            setTimeout(() => setTexto(""), 5000);
        }
    };

    return (
        <View style={style.tela2}>
            <Text style={style.titulo}>
                Cadastrar-se nas contas do Gugu
            </Text>
            <View style={style.form}>
                <View style={style.inputs}>
                    <View style={{ width: "19%" }}>
                        <Text style={style.label}>
                            Nome:
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', width: "75%" }}>
                        <TextInput 
                            style={style.input} 
                            value={nome} 
                            placeholder="Digite o seu nome" 
                            onChangeText={setNome} 
                            autoCapitalize="sentences" 
                            autoFocus 
                        />
                    </View>
                </View>
                <View style={style.inputs}>
                    <View style={{ width: "19%" }}>
                        <Text style={style.label}>
                            E-mail:
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', width: "75%" }}>
                        <TextInput 
                            style={style.input} 
                            value={email} 
                            placeholder="Digite o seu e-mail" 
                            onChangeText={setEmail} 
                            keyboardType="email-address" 
                        />
                    </View>
                </View>
                <View style={style.inputs}>
                    <View style={{ width: "19%" }}>
                        <Text style={style.label}>
                            Senha:
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', width: "75%" }}>
                        <TextInput 
                            style={style.input} 
                            value={senha} 
                            placeholder="Digite a sua senha" 
                            onChangeText={setSenha} 
                            secureTextEntry 
                        />
                    </View>
                </View>
            </View>
            <Text style={[style.aviso, { color: criado ? 'rgb(0,255,0)' : 'rgb(255,0,0)' }]}>
                {texto}
            </Text>
            <TouchableOpacity style={style.btn} onPress={AutenticarCadastro}>
                <Text style={style.textoBtn}>
                    CRIAR CONTA
                </Text>
            </TouchableOpacity>
        </View>
    );
}
