import React, { Component } from 'react';
import { View, ScrollView, Button, TouchableOpacity, Text} from 'react-native';
import Board from './board'; // Assuming Board is in a file named Board.js
import styles from './BoardStyles';
import InputModal from './../Modal/InputModal'
import listMaker from '../ListMaker/ListMaker'

export default class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: props.route.params.boards || [],
            isModalVisible: false,
            nextId: 4,
            
        };
    }
    addBoard = (name, url) => {
        const newBoard = { id: this.state.nextId,name:name, imgSrc: url }; // Customize as needed
        this.setState(prevState => ({
            boards: [...prevState.boards, newBoard],
        }));
        this.state.nextId += 1;
    }
    toggleModal = () => {
        this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
    }

    render() {
        const { boards } = this.state; // Get boards from props
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>The Toodler</Text>
                <ScrollView style={{flex:1, marginBottom:50}}>
                    {boards.map((board) => (
                        <TouchableOpacity
                        key={board.id}
                        onPress={() => navigation.navigate('ListView', { lists: listMaker('lists',board.id), boardName: board.name})}
                        >
                            <Board key={board.id} name={board.name} imgSrc={board.imgSrc} />
                        </TouchableOpacity>
                    ))}
                
                
                <TouchableOpacity onPress={this.toggleModal} style={styles.boardButton}>
                    <Text style = {styles.buttonText}>Add New Board</Text>
                </TouchableOpacity>
                <InputModal
                    isVisible={this.state.isModalVisible}
                    onAddBoard={this.addBoard}
                    onClose={this.toggleModal}
                />
                </ScrollView>
                
            </View>
        );
    }
}