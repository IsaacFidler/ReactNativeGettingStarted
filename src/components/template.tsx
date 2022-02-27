import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export type Props = {
  prop1: string;
  prop2?: number;
};

const Template: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
 

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Template {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Template;