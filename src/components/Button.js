import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onClick={props.onClick} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        width: '100%',
        height: '42%',
        backgroundColor: '#AF0098',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingBottom: 10,
        paddingTop: 10,
    },
    buttonText: {
        fontSize: 50,
        color: 'white'
    }
};

export default Button;
