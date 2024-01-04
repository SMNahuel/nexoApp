import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  View,
} from 'react-native';

interface ButtonProps extends ViewProps {
  text: string;
  onPress: () => void;
}

const ButtonPrincipal: React.FunctionComponent<ButtonProps> = ({
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.buttonPricipal} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPricipal: {
    padding: 24,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    margin: 2,
    width: 300
  },
  textStyle: {
    color: 'black',
  },
});

export default ButtonPrincipal;
