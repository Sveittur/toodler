import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ListStyles'
import Task from '../TaskView/task'
export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            color: props.color,
            boardId: props.boardId,
            tasks : props.tasks
        }; 
    }

    render() {
        const { name, color, tasks } = this.props;
        return (
            <View style = {styles.listContainer}>
                <Text style = {{color:color, fontSize:20}}>{name}.</Text>
                {tasks.map((task) => (
                        <Task key={task.id} name = {task.name} description = {task.description} isFinished = {task.isFinished} listId = {task.listId}/>
                    ))}
            </View>
        );
    }
}