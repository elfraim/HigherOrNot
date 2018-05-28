import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        width: '100%',
        height: '40%',
        backgroundColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingBottom: 10,
        paddingTop: 10,
        elevation: 5,
    },
    buttonText: {
        fontSize: 50,
        color: 'white',
        elevation: 1
    }
};

export default Button;
