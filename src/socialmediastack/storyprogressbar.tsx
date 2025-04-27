import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StoryProgressBarsProps } from './socialmediastack.type';

const StoryProgressBar: React.FC<StoryProgressBarsProps> = ({ totalStories, activeStoryIndex }) => {
  return (
    <View style={styles.progressBarsContainer}>
      {Array.from({ length: totalStories }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.progressBar,
            index === activeStoryIndex ? styles.activeProgressBar : styles.inactiveProgressBar
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarsContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  progressBar: {
    flex: 1,
    height: 5,
    marginHorizontal: 2,
  },
  activeProgressBar: {
    backgroundColor: '#FFFFFF',
  },
  inactiveProgressBar: {
    backgroundColor: '#ffffff75',
  },
});

export default StoryProgressBar;