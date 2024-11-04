import { useState } from 'react';
import { TouchableWithoutFeedback, View, Modal, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function CriarTarefa({visible, onCancelar, onCriar}) {
  const [task, setTask] = useState("");

  const criarTask = () => {
    if (task.trim() === "") {
      alert("Acho que o campo não está aí pra ficar vazio!");
      return;
    }
    onCriar(task);
    setTask("")
  };

 return (
   <Modal
   visible={visible}
   transparent={true}
   animationType="slide"
   onRequestClose={onCancelar}
   >
    <TouchableWithoutFeedback onPress={onCancelar}>
<View style={style.overlay}>
  <View style={style.modal}>
    <Text style={style.title}>
      Nova tarefa
    </Text>

    <TextInput style={style.input} value={task} placeholder="Digite a sua nova tarefa" placeholderTextColor={"#aaa"} onChangeText={setTask} />
    <View style={style.buttons}>
      <TouchableOpacity style={style.cancel} onPress={onCancelar}>
        <Text style={style.cancelTexto}>
          CANCELAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.criar} onPress={criarTask}>
        <Text style={style.criarTexto}>
          CRIAR
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
    </TouchableWithoutFeedback>
   </Modal>
  );
}

const style = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: "80%",
    padding: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    alignItems: 'center',
    borderColor: "#444",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#f5f5f5',
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#f5f5f5',
    backgroundColor: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
  },
  cancel: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 5,
  },
  cancelTexto: {
    color: '#f5f5f5',
  },
  criar: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 5,
  },
  criarTexto: {
    color: '#fff',
  }
});