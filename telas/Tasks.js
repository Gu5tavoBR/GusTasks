import { AccessibilityInfo, StyleSheet, View, Text, TouchableOpacity, FlatList, Pressable, ActivityIndicator,  } from "react-native";
import style from "../style";
import AS from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CriarTarefa from "../src/componentes/CriarTarefa";
import EditarTarefa from "../src/componentes/EditarTarefa";

export default function Tasks({ navigation }) {
  const [mostrarCriar, setMostrarCriar] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [titleSelecionado, setTitleSelecionado] = useState("");
  const [esperando, setEsperando] = useState(false)

  const abrirCriar = () => setMostrarCriar(true);
  const fecharCriar = () => setMostrarCriar(false);
  const criarTask = (task) => {
    setEsperando(true)
fetch(`https://api-todolist-rho.vercel.app/criartarefa?id=${id}&title=${task}`)
.then(() => {
  navigation.navigate("Tabs")
      fecharCriar();
      setEsperando(false)
}
)
  };

  const abrirEditar = () => setMostrarEditar(true);
  const fecharEditar = () => setMostrarEditar(false);
  const editarTask = (title) => {
    setTitleSelecionado(title)
    setEsperando(true)
fetch(`https://api-todolist-rho.vercel.app/editartask?id=${id}&title=${title}`)
.then(() => {
  navigation.navigate("Tabs")
  fecharEditar();
  setEsperando(false)
})
  };

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    AS.getItem("id").then((ID) => 
      setId(ID)
    );
}, []);

  useEffect(() => {
    AS.getItem("name").then((nome) => setNome(nome)
    );
  }, []);

  useEffect(() => {
    tarefas();
  }, [id])

  const tarefas = () => {
    setEsperando(false)
    fetch(`https://api-todolist-rho.vercel.app/?id=${id}`)
    .then(result => result.json())
    .then(resposta => {
      setResponse(resposta);
      setEsperando(false)
    });
  }


  return (
    <View style={style.tela3}>
      {esperando && <ActivityIndicator size="large" color="#fff" />}
      {response.length == 0 ? (
        <Text style={style.msg}>
          Ainda não encontramos nenhuma tarefa no momento! É provável que você não tenha criado nenhuma.
        </Text>
      ) : (
    <View style={style.tasksContainer}>
      <FlatList
      style={{flexGrow: 0}}
        data={response}
        renderItem={({item}) => (
          <Pressable style={style.containerTask} onLongPress={() => editarTask(item.title)}>
            <TouchableOpacity style={style.apagarTask} onPress={() => {
              setEsperando(true)
              fetch(`https://api-todolist-rho.vercel.app/deletartask?id=${item.id}`)
              .then(() => {
                navigation.navigate("Tabs")
setEsperando(false)
              })
            }}>
            <MaterialIcons name="delete" size={15} color="rgb(0,122,204)" />
            </TouchableOpacity>
           <Text style={style.title}>
            {item.title}
          </Text>
          <Text style={style.status}>
            {item.status}
          </Text> 
          </Pressable>
        )}
      />
    </View>
      )}
      <View style={style.addContainer}>
        <TouchableOpacity onPress={abrirCriar}>
          <MaterialIcons name="add-circle" size={60} color="rgb(0,122,204)" />
        </TouchableOpacity>
      </View>

<CriarTarefa
visible={mostrarCriar}
onCancelar={fecharCriar}
onCriar={criarTask}
/>

<EditarTarefa
visible={mostrarEditar}
onCancelar={fecharEditar}
onEditar={editarTask}
titulo={titleSelecionado}
/>
    </View>
 );
}