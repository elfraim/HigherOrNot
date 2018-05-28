import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from './Button';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumbers: [1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14],
            theCard: 5,
        };
        this.cardChooser = this.cardChooser.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
    }
    cardChooser() {
        const integer = this.state.cardNumbers.length - 1;
        const randNum = Math.floor(Math.random() * integer);
        const stateCard = this.state.cardNumbers[randNum];
        if (stateCard === 11) {
            this.setState({ theCard: 'J' });
        } else if (stateCard === 12) {
            this.setState({ theCard: 'Q' });
        } else if (stateCard === 13) {
            this.setState({ theCard: 'K' });
        } else if (stateCard === 14) {
            this.setState({ theCard: 'A' });
        } else {
            this.setState({ theCard: stateCard });
        }
    }
    render() {
        const { numberCardStyle, textStyle } = styles;

        return (
            <View style={numberCardStyle}>
                <Button onPress={this.cardChooser}> Higher </Button>
                <Text style={textStyle}>{this.state.theCard}</Text>
                <Button onPress={this.cardChooser}> Lower </Button>
            </View>
        );
    }
}

const styles = {
    numberCardStyle: {
        height: '91%',
        backgroundColor: '#03A9F4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 100,
        color: '#37474F'
    }
}

export default Card;
