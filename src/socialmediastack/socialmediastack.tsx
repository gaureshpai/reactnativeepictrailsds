import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SocialMediaStackProps } from './socialmediastack.type';

const SocialMediaStack: React.FC<SocialMediaStackProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export default SocialMediaStack;