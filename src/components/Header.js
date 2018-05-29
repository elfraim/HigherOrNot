import React from 'react';
import { View, Text, Button } from 'react-native';

const Header = (props) => {
    return (
        <View>
            <View style={styles.titleStyle}>
                <Text style={styles.textStyle}>{props.headerText}</Text>
            </View>
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
    },
  };

export default Header;
