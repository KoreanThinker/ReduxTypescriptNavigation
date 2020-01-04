import React from 'react';
import { View, FlatList } from 'react-native'
import useTodo from '../../hooks/useTodo';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

function TodoScreen() {
    const { list } = useTodo();
    console.log("list");
    console.log(list);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={<TodoInput />}
                data={list}
                renderItem={({ item }) => <TodoItem {...item} />}
                keyExtractor={(item, index) => `todo${index}`}
            />
        </View>
    );
}

export default TodoScreen;