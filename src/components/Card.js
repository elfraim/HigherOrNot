import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from './Button';


class Card extends Component {
    state = { cardNumbers: ['1', '2', '3', '4',
                            '5', '6', '7', '8',
                            '9', '10', 'J', 'Q',
                            'K', 'A'],
                        theCard: '5'
                     };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.cardNumbers < this.state.cardNumbers) {
            return Alert.alert('Alert', 'test', { text: 'You lose' });
        }
    }

    cardChooser = () => {
        const integer = this.state.cardNumbers.length - 1;
        const randNum = Math.floor(Math.random() * integer);
        const stateCard = this.state.cardNumbers[randNum];
        if ( stateCard === 'K' || stateCard === 'Q') {
            return 'King';
        } else {
            return this.state.cardNumbers[randNum];
        }
    }

    checkHigher = () => {

    }

    render() {
        const { numberCardStyle, textStyle } = styles;

        return (
            <View style={numberCardStyle}>
                <Button onClick={() => this.cardChooser()}> Higher </Button>
                <Text style={textStyle}>{this.cardChooser()}</Text>
                <Button> Lower </Button>
            </View>
        );
    }
}

const styles = {
    numberCardStyle: {
        height: '91%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 100
    }
}

export default Card;
