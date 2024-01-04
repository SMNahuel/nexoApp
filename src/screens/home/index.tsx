import React from 'react';
import {View, Button, StyleSheet, Dimensions, Text} from 'react-native';
import ButtonPrincipal from '../../components/Button';
const {height} = Dimensions.get('window');
/* @ts-ignore */
const Home = ({navigation}) => {
  return (
    <View style={style.containerButton}>
      <Text>Seleccionar Rover</Text>
      <ButtonPrincipal
        text="Curiosity"
        onPress={() =>
          navigation.navigate('ImageScreen', {
            name: 'Curiosity',
            maxDate: '2024-01-03',
          })
        }
      />
      <ButtonPrincipal
        text="Opportunity"
        onPress={() =>
          navigation.navigate('ImageScreen', {
            name: 'Opportunity',
            maxDate: '2018-06-11',
          })
        }
      />
      <ButtonPrincipal
        text="Spirit"
        onPress={() =>
          navigation.navigate('ImageScreen', {
            name: 'Spirit',
            maxDate: '2005-05-04',
          })
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

export default Home;
