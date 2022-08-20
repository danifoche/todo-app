import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ handleSubmit }) => {
    const [testo, setTesto] = useState('');

    const handleChangeText = (value) => {
        setTesto(value);
    }

    const clearText = () => {
        setTesto('');
    }

    return (
        // Aggiungi Todo
        <View>
            <TextInput 
                style={styles.input}
                placeholder="nuovo todo..."
                onChangeText={handleChangeText}
                value={testo}
            />
            <Button onPress={() => { handleSubmit(testo); clearText() }} title='Aggiungi Todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default AddTodo;