import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image}  from 'react-native';


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('/Users/aditi/Documents/ReactNativeProjects/FirstProject/assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title = "Add Goal" onPress={addGoalHandler} color="#d6cced"/>

                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#140b29'
    }, 
    textInput: { 
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width: '100%',
        padding: 16,
        color: 'black',
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginTop: 16,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }

});