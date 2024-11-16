import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: 'rgb(18,18,18)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    tela2: {
        flex: 1,
        backgroundColor: 'rgb(18,18,18)',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    tela3: {
        flex: 1,
        backgroundColor: 'rgb(18,18,18)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    iconeHome: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    bmv: {
        textAlign: 'center',
        color: 'rgb(245,245,245)',
        padding: 35,
    },
    btn: {
        backgroundColor: 'rgb(0,122,202)',
        width: "80%",
        height: "7%",
        borderRadius: 20,
        borderColor: "rgb(255,255,255)",
        borderWidth: 1,
    },
    titulo: {
        color: 'rgb(245,245,245)',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    form: {
        borderWidth: 2,
        borderColor: "#fff",
        width: "90%",
        borderRadius: 15,
    },
    label: {
        color: '#fff',
    },
    textoBtn: {
        color: 'rgb(255,255,255)',
        fontSize: 15,
        margin: "auto",
    },
    aviso: {
        textAlign: 'center',
        fontSize: 18,
    },
    inputs: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        padding: 10,
    },
    addContainer: {
        alignItems: 'flex-end',
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    msg: {
        color: '#fff',
        textAlign: 'center',
    },
    tasksContainer: {
        backgroundColor: 'rgb(60,60,60)',
        width: '100%',
        height: '70%',
        borderWidth: 3,
        borderColor: "rgb(255,255,255)",
        borderRadius: 10,
        padding: 5,
    },
    title: {
        color: '#fff',
        width: 250,
        fontSize: 8,
        flex: 1,
    },
    containerTask: {
        flexDirection: 'row',
        backgroundColor: 'rgb(80,80,80)',
        marginVertical: 6,
        width: "auto",
        height: 40,
        borderRadius: 8,
        borderColor: "rgb(255,255,255)",
        borderWidth: 2,
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    status: {
        color: '#fff',
        marginLeft: 10,
    },
    statusIcon: {
        marginRight: 10,
    },
    cabecalho: {
        backgroundColor: 'rgb(80,80,80)',
        width: "100%",
        height: 50,
        borderRadius: 8,
    },
    nome: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 'auto',
    },
    containerButtons: {
        backgroundColor: 'rgb(60,60,60)',
        width: "100%",
        height: "100%",
        marginTop: 10,
        padding: 20,
        gap: 10,
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderRadius: 8,
    },
    perfil: {
        flexDirection: 'row',
        backgroundColor: 'rgb(75,75,75)',
        padding: 4,
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderRadius: 8,
    },
    textoPerfil: {
        color: '#fff',
        marginHorizontal: "auto",
    }
});

export default style;