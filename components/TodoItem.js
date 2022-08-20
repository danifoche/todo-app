import React from "react";
import { ActivityIndicatorComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ todo, handlePress }) => {

    return (
        // Visualizzo ogni singolo Todo
        <TouchableOpacity onPress={() => handlePress(todo.key)}>
            <View style={styles.item}>
                <MaterialIcons  name='delete' size={18} color='#333' />
                <Text style={styles.itemText}>{todo.testo}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
});

export default TodoItem;