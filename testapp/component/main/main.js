import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  stretch: {
    width: 200,
    height: 200,
    left: 81,
    
  },
  forest: {
    width: 322,
    height: 145,
    left: 20,
    top: -40,
  },
  equipment: {
    width: 155,
    height: 100,
    left: 20,
    top: -37,
  },
  map: {
    width: 162,
    height: 100,
    left: 180,
    top:-137,
  },
  score: {
    width: 322,
    height: 145,
    left: 20,
    top:-134,
  },
  book: {
    width: 322,
    height: 145,
    left: 20,
    top:-130,
  },
});

const main = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./assets/image/longpha.png')}
      />
      <Image
        style={styles.forest}
        source={require('./assets/image/forest.jpg')}
      />
      <Image
        style={styles.equipment}
        source={require('./assets/image/equipment.jpg')}
      />
      <Image
        style={styles.map}
        source={require('./assets/image/map.jpg')}
      />
      <Image
        style={styles.score}
        source={require('./assets/image/score.png')}
      />
      <Image
        style={styles.book}
        source={require('./assets/image/book.jpg')}
      />
    </View>
  );
}

export default main;