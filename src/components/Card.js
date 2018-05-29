import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import HigherButton from './HigherButton';
import LowerButton from './LowerButton';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumbers: [1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14],
            theCard: 5,
            cardInteger: 5,
            higherOrLower: true, //true === Higher, false === Lower
        };
        this.HigherCardChooser = this.HigherCardChooser.bind(this);
        this.LowerCardChooser = this.LowerCardChooser.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cardInteger > this.state.cardInteger && this.state.higherOrLower === true) {
            this.loser();
        } else if (prevState.cardInteger < this.state.cardInteger && this.state.higherOrLower === false) {
            this.loser();
        }
        console.log(this.state);
    }

    loser() {
        this.setState({
            theCard: `${this.state.theCard} LOSE!`
        });
    }


    HigherCardChooser() {
        this.setState({
            higherOrLower: true
        });
        const integer = this.state.cardNumbers.length - 1;
        const randNum = Math.floor(Math.random() * integer);
        const stateCard = this.state.cardNumbers[randNum];
        if (stateCard === 11) {
            this.setState({
                theCard: 'J',
                cardInteger: 11
             });
        } else if (stateCard === 12) {
            this.setState({
                theCard: 'Q',
                cardInteger: 12
             });
        } else if (stateCard === 13) {
            this.setState({
                theCard: 'K',
                cardInteger: 13
             });
        } else if (stateCard === 14) {
            this.setState({
                theCard: 'A',
                cardInteger: 14
             });
        } else {
            this.setState({
                theCard: stateCard,
                cardInteger: stateCard
             });
        }
    }

    LowerCardChooser() {
        this.setState({
            higherOrLower: false
        });
        const integer = this.state.cardNumbers.length - 1;
        const randNum = Math.floor(Math.random() * integer);
        const stateCard = this.state.cardNumbers[randNum];
        if (stateCard === 11) {
            this.setState({
                theCard: 'J',
                cardInteger: 11
             });
        } else if (stateCard === 12) {
            this.setState({
                theCard: 'Q',
                cardInteger: 12
             });
        } else if (stateCard === 13) {
            this.setState({
                theCard: 'K',
                cardInteger: 13
             });
        } else if (stateCard === 14) {
            this.setState({
                theCard: 'A',
                cardInteger: 14
             });
        } else {
            this.setState({
                theCard: stateCard,
                cardInteger: stateCard
             });
        }
    }


    render() {
        const { numberCardStyle, textStyle } = styles;

        return (
            <View style={numberCardStyle}>
                <HigherButton onPress={this.HigherCardChooser}> Higher </HigherButton>
                <Text style={textStyle}>{this.state.theCard}</Text>
                <LowerButton onPress={this.LowerCardChooser}> Lower </LowerButton>
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
