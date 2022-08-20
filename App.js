import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { testo: "Completa l'app", key: "0" },
    { testo: "Comprare il gelato", key: "1" },
    { testo: "Andare da Marco", key: "2" },
  ]);

  // Gestisco il click di un todo
  const handlePress = (key) => {

    // Filtro l'array e tolgo quello che matcha con l'id
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  const handleSubmit = (testo) => {
    // Controllo se il testo è vuoto  
    if(!testo) {
      Alert.alert('Attenzione', 'inserisci il testo prima di procedere!', [
        { text: 'Ho capito!' }
      ])

      return;
    }

    setTodos((prevTodos) => {
      return [
        // ottengo una nuova key col length perche ne conta uno in più
        { testo: testo, key: prevTodos.length },
        ...prevTodos,
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() =>{ Keyboard.dismiss() }}>
      {/* Container app intera */}
      <View style={styles.container}>

        {/* Header della pagina */}
        <Header />

        {/* Contenuto pagina Todo */}
        <View style={styles.content}>

          {/* Aggiungi Todo */}
          <AddTodo handleSubmit={handleSubmit} />

          {/* Lista Todo */}
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem todo={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
