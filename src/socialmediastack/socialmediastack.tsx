import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SocialMediaStackProps } from './socialmediastack.type';


/**
 * SocialMediaStack Component
 * 
 * A container component that wraps social media related components
 * such as StoryProgressBar, SocialMediaEngagement, and BottomNav.
 */
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