import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { TodoList } from '../../modules/Todo'
import useTodo from '../../hooks/useTodo';

const WIDTH = Dimensions.get('window').width;

const defaultProps: TodoList = {
    text: '',
    id: 1,
    isLine: false,
}

function TodoItem(props: TodoList = defaultProps) {

    const { onRemove, onSetline } = useTodo()

    return (
        <View style={{ width: WIDTH - 20, minHeight: 50, margin: 10, borderRadius: 4, ...shadow, alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, padding: 10 }} onPress={() => onSetline(props.id)}>
                <Text style={{ textAlign: 'left', fontSize: 20, textDecorationLine: props.isLine ? "line-through" : 'none' }}>{props.text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => onRemove(props.id)}>
                <Text style={{ fontSize: 30, color: 'red', alignSelf: 'center' }}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem


const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}