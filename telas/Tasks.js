import { AccessibilityInfo, StyleSheet, View, Text, TouchableOpacity, FlatList, Pressable,  } from "react-native";
import style from "../style";
import AS from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CriarTarefa from "../src/componentes/CriarTarefa";
import EditarTarefa from "../src/componentes/EditarTarefa";

export default function Tasks({ navigation }) {
  const [mostrarCriar, setMostrarCriar] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [titleSelecionado, setTitleSelecionado] = useState(null)

  const abrirCriar = () => setMostrarCriar(true);
  const fecharCriar = () => setMostrarCriar(false);
  const criarTask = (task) => {
fetch(`https://api-todolist-rho.vercel.app/criartarefa?id=${id}&title=${task}`)
navigation.navigate("Tabs")
    fecharCriar();
  };

  const abrirEditar = () => setMostrarEditar(true);
  const fecharEditar = () => setMostrarEditar(false);
  const editarTask = (title) => {
    setTitleSelecionado(title)
fetch(`https://api-todolist-rho.vercel.app/editartarefa?id=${id}&title=${title}`)
navigation.navigate("Tabs")
    fecharEditar();
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
    fetch(`https://api-todolist-rho.vercel.app/?id=${id}`)
    .then(result => result.json())
    .then(resposta => setResponse(resposta))
  }

  tarefas()

  return (
    <View style={style.tela3}>
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
          <Pressable style={style.containerTask} onPress={() => editarTask(item.title)}>
            <TouchableOpacity style={style.apagarTask} onPress={() => {
              fetch(`https://api-todolist-rho.vercel.app/deletartask?id=${item.id}`)
              .then(() => {

                navigation.navigate("Tabs")
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