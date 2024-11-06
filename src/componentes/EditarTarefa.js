import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View, Modal, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function EditarTarefa({visible, onCancelar, onEditar, titulo}) {
  const [title, setTitle] = useState(titulo);

  useEffect(() => {
    setTitle(titulo);
  }, [titulo]);

  const editarTask = () => {
    if (title.trim() === "") {
      alert("Acho que o campo não está aí pra ficar vazio!");
      return;
    }
    onEditar(title);
    setTitle("")
  };

 return (
   <Modal
   visible={visible}
   transparent={true}
   animationType="fade"
   onRequestClose={onCancelar}
   >
    <TouchableWithoutFeedback onPress={onCancelar}>
<View style={style.overlay}>
  <View style={style.modal}>
    <Text style={style.title}>
      Editar tarefa
    </Text>

    <TextInput style={style.input} value={title} placeholder="Digite a sua edição" placeholderTextColor={"#aaa"} onChangeText={setTitle} />
    <View style={style.buttons}>
      <TouchableOpacity style={style.cancel} onPress={onCancelar}>
        <Text style={style.cancelTexto}>
          CANCELAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.editar} onPress={editarTask}>
        <Text style={style.editarTexto}>
          EDITAR
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
  editar: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 5,
  },
  editarTexto: {
    color: '#fff',
  }
});