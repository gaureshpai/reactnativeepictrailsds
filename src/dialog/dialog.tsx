import React from 'react';
import { View, Text } from 'react-native';
import RectButton from "../Button/rect";
import { DialogProps } from "./dialog.type";
import { createStyle } from '../utils/styleCompat';

const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  buttonLabel,
  onButtonPress,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <View style={createStyle({
      className: `${className || ''} absolute inset-0 flex items-center justify-center bg-black/50`,
      style: [
        {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        style
      ].filter(Boolean)
    })} {...props}>
      <View style={createStyle({
        className: 'bg-white shadow-lg w-80 max-w-full overflow-hidden',
        style: {
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
          width: 320,
          maxWidth: '100%',
          overflow: 'hidden'
        }
      })}>
        <View style={createStyle({
          className: 'w-full h-40 flex items-center justify-center bg-gray-100',
          style: {
            width: '100%',
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6'
          }
        })}>
          {children}
        </View>
        
        <View style={createStyle({
          className: 'p-4',
          style: { padding: 16 }
        })}>
          <Text style={createStyle({
            className: 'text-base font-semibold text-gray-800 mb-2',
            style: {
              fontSize: 16,
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: 8
            }
          })}>
            {title}
          </Text>
          
          <Text style={createStyle({
            className: 'text-xs text-gray-600 mb-4',
            style: {
              fontSize: 12,
              color: '#4b5563',
              marginBottom: 16
            }
          })}>
            {description}
          </Text>
          
          <View style={createStyle({
            className: 'mt-2',
            style: { marginTop: 8 }
          })}>
            <RectButton label={buttonLabel} onPress={onButtonPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dialog;