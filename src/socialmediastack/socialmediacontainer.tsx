import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { SocialMediaContainerProps, ImageContent } from './socialmediastack.type';

const SocialMediaContainer: React.FC<SocialMediaContainerProps> = ({ 
  contentItems = [], 
  duration = 10000, 
  onActiveIndexChange = () => {} 
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const videoRef = useRef<VideoRef | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (contentItems.length === 0) return;
    
    setImageLoaded(false);
    setImageError(false);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
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
          <View style={styles.mediaContainer}>
            {currentItem.isLocal ? (
              <Image
                // @ts-ignore: This is handled properly when passed correctly
                source={currentItem.imageUri}
                style={styles.media}
                resizeMode="cover"
                onLoad={() => setImageLoaded(true)}
                onError={(error) => {
                  console.error('Image loading error:', error);
                  setImageError(true);
                }}
              />
            ) : (
              <Image
                source={{ 
                  uri: currentItem.imageUri,
                  cache: 'force-cache',
                }}
                style={styles.media}
                resizeMode="cover"
                onLoad={() => setImageLoaded(true)}
                onError={(error) => {
                  console.error('Image loading error:', error);
                  setImageError(true);
                }}
              />
            )}
            
            {!imageLoaded && !imageError && (
              <View style={styles.loadingContainer}>
                <Text style={styles.text}>Loading image...</Text>
              </View>
            )}
            
            {imageError && (
              <View style={[styles.loadingContainer, { backgroundColor: '#e74c3c' }]}>
                <Text style={styles.text}>
                  Image failed to load{'\n'}
                  URI: {currentItem.imageUri.substring(0, 30)}...
                </Text>
              </View>
            )}
          </View>
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
        return (
          <View style={[styles.textContainer, { backgroundColor: '#95a5a6' }]}>
            <Text style={styles.text}>Unknown content type</Text>
          </View>
        );
    }
  };

  const currentItem = contentItems[activeIndex];
  const isImageType = currentItem.type === 'image';
  
  return (
    <View style={styles.container}>
      {renderContent()}
      
      {__DEV__ && isImageType && imageError && (
        <View style={styles.debugPanel}>
          <Text style={styles.debugText}>
            Debug: Image Load Error{'\n'}
            Type: {(currentItem as ImageContent).isLocal ? 'Local' : 'Remote'}{'\n'}
            URI: {(currentItem as ImageContent).imageUri.substring(0, 20)}...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '95%',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#000',
    zIndex: -1000,
  },
  mediaContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#222',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
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
  },
  debugPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 10,
  },
  debugText: {
    color: '#ff9900',
    fontSize: 10,
  }
});

export default SocialMediaContainer;