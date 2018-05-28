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
      backgroundColor: '#1565C0',
    },
    textStyle: {
        fontSize: 25,
        color: 'white',
    }
  };

export default Header;
