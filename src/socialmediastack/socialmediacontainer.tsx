import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Video from 'react-native-video';
import { VideoContent, ImageContent, TextContent, ContentItem, SocialMediaContainerProps } from './socialmediastack.type';


/**
 * SocialMediaContainer Component
 * 
 * A versatile component that displays different types of media content in sequence:
 * - Videos (with uri property)
 * - Images (with imageUri property)
 * - Text content (with text and backgroundColor properties)
 */
const SocialMediaContainer: React.FC<SocialMediaContainerProps> = ({ 
  contentItems = [], 
  duration = 10000, 
  onActiveIndexChange = () => {} 
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const videoRef = useRef<any | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (contentItems.length === 0) return;
    
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Only set timer for non-video content or if video type is not currently playing
    const currentItem = contentItems[activeIndex];
    if (currentItem.type !== 'video') {
      timerRef.current = setTimeout(() => {
        const nextIndex = (activeIndex + 1) % contentItems.length;
        setActiveIndex(nextIndex);
        onActiveIndexChange(nextIndex);
      }, duration);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, contentItems, duration, onActiveIndexChange]);

  // If no content items are provided
  if (contentItems.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text>No content available</Text>
        </View>
      </View>
    );
  }

  const renderContent = () => {
    const currentItem = contentItems[activeIndex];
    
    switch (currentItem.type) {
      case 'video':
        return (
          <Video
            ref={videoRef}
            source={{ uri: currentItem.uri }}
            style={styles.media}
            resizeMode="cover"
            repeat={false}
            onEnd={() => {
              // Move to next item when video ends
              const nextIndex = (activeIndex + 1) % contentItems.length;
              setActiveIndex(nextIndex);
              onActiveIndexChange(nextIndex);
              
              if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
              }
            }}
          />
        );
        
      case 'image':
        return (
          <Image
            source={{ uri: currentItem.imageUri }}
            style={styles.media}
            resizeMode="cover"
          />
        );
        
      case 'text':
        return (
          <View 
            style={[
              styles.textContainer, 
              { backgroundColor: currentItem.backgroundColor || '#3498db' }
            ]}
          >
            <Text style={styles.text}>{currentItem.text}</Text>
          </View>
        );
        
      default:
        // This should never happen due to TypeScript's type checking
        return (
          <View style={[styles.textContainer, { backgroundColor: '#95a5a6' }]}>
            <Text style={styles.text}>Unknown content type</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    zIndex:-10,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SocialMediaContainer;