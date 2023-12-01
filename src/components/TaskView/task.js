import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TaskStyles'
export default class Task extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            isFinished: props.isFinished,
            listId : props.listId
        }; 
    }

    render() {
        const { name, description} = this.props;
        return (
            <View style = {styles.taskContainer}>
                <Text style = {{color:'#EAF0CE', fontSize:18, fontWeight:'bold', margin:3,}}>{name}</Text>
                <Text style = {{color:'#F6FEDB', fontSize:13, marginLeft:8,marginBottom:5, marginRight:5}}>{description}</Text>
            </View>
        );
    }
}