import React, { Component } from 'react';
import { View, ScrollView, Button, TouchableOpacity, Text} from 'react-native';
import List from './list'; // Assuming Board is in a file named Board.js
import styles from './ListStyles';
import listMaker from '../ListMaker/ListMaker'
export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: props.route.params.lists || [],
            boardName: props.route.params.boardName,            
        };
    }

    render() {
        const { lists } = this.state; // Get boards from props
        const { boardName } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{boardName}</Text>
                <ScrollView style={{flex:1, marginBottom:50}}>
                    {lists.map((list) => (
                        <List key={list.id} name={list.name} color={list.color} boardId={list.boardId} tasks={listMaker('tasks',list.id)}/>
                    ))}
                </ScrollView>
                
            </View>
        );
    }
}