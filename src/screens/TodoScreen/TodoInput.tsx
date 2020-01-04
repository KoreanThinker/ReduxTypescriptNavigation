
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import useTodo from '../../hooks/useTodo';


function TodoInput() {
    const { onAppend } = useTodo();
    const [todo, setTodo] = useState('');

    const submit = () => {
        onAppend(todo);
        setTodo('');
    }

    return (
        <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                value={todo}
                onChangeText={text => setTodo(text)}
                placeholder='할일을 입력해주세요'
                style={{ flex: 1, height: 50, }}
            />
            <TouchableHighlight onPress={submit} style={{ width: 100, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>등록</Text>
            </TouchableHighlight>
        </View>
    )
}

export default TodoInput
