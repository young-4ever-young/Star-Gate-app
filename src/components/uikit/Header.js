import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) =>{
    const styles = StyleSheet.create({
        viewStyle: {
          backgroundColor: '#30d0fe',
          height:116,
          justifyContent:'center',
          paddingLeft: 22,
          paddingTop: 71,
          shadowColor: '#000',
          shadowOffset:{width:0, height: 2},
          shadowOpacity: 2,
          elevation: 2,
          position: 'relative'
        },
        textStyle: {
          color:'#fff',
          fontSize: 28,
          fontFamily: 'Avenir Next Condensed'
        }
      });
    return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
    
}

export default Header;