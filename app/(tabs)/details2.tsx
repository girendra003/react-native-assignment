import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details2 Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
});

export default Details2;