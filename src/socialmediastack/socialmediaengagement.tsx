import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const SocialMediaEngagement = ({ 
  icons = [
    { name: 'heart-outline', onPress: () => console.log('Like pressed') },
    { name: 'chatbox-outline', onPress: () => console.log('Comment pressed') },
    { name: 'paper-plane-outline', onPress: () => console.log('Share pressed') },
  ],
  iconColor = '#ffffff',
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.iconButton}
            onPress={icon.onPress}
          >
            <Ionicons name={icon.name as any} size={24} color={iconColor} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 15,
    bottom: 120,
    borderRadius: 8,
    padding: 8,
    width: 60,
    alignItems: 'center',
    zIndex: 999, 
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    width: '100%',
  },
  iconsContainer: {
    width: '100%',
  },
  iconButton: {
    width: '100%',
    backgroundColor: '#ffffff75',
    marginBottom:18,
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 2,
  }
});

export default SocialMediaEngagement;