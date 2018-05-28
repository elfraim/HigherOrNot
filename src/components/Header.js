import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.titleStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    titleStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      paddingTop: 35,
      position: 'relative',
      backgroundColor: '#00ACC1',
    },
    textStyle: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Apple SD Gothic Neo'
    }
  };

export default Header;
