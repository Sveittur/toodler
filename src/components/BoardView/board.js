import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './BoardStyles'
export default class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            imgSrc: props.imgSrc
        };

        
    }

    render() {
        const { name, imgSrc } = this.props;
        return (
            <View style = {styles.boardView}>
                <Text style = {styles.boardText}>{name}.</Text>
                <Image source={{uri: imgSrc}} style={styles.boardImage} />
            </View>
        );
    }
}