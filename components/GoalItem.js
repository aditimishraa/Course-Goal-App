import {StyleSheet, View, Text, Pressable}  from 'react-native';


function GoalItem(props) {

    return (
        <View style={styles.goalListContainer}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>

            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalListContainer: {
        margin: 8, 
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#423e4f', 
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
    }
});