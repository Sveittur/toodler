import React, { Component, useState } from 'react';
import { View, Button, TextInput, Modal, StyleSheet } from 'react-native';

const InputModal = ({ isVisible, onAddBoard, onClose }) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const handleAdd = () => {
        onAddBoard(name, url);
        setName('');
        setUrl('');
        onClose();
    };

    return (
        <Modal visible={isVisible} animationType="slide" transparent={false}>
            <View style={styles.modalView}>
                <TextInput
                    placeholder="Enter Board Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Enter Image URL"
                    value={url}
                    onChangeText={setUrl}
                    style={styles.input}
                />
                <Button title="Add Board" onPress={handleAdd} />
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
});

export default InputModal;