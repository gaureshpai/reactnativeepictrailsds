import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyle } from './utils/styleCompat';
import { ContainerComponentProps } from './types/common';

export interface SocialLoginProps extends ContainerComponentProps {
  email?: boolean;
  google?: boolean;
  facebook?: boolean;
  apple?: boolean;
  onEmailSignIn?: () => void;
  onGoogleSignIn?: () => void;
  onFacebookSignIn?: () => void;
  onAppleSignIn?: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  email = true,
  google = true,
  facebook = true,
  apple = true,
  onEmailSignIn,
  onGoogleSignIn,
  onFacebookSignIn,
  onAppleSignIn,
  className,
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: `${className || ''} w-full`,
    style
  });

  const buttonStyle = createStyle({
    className: 'flex-row items-center justify-center p-3 m-1 rounded-lg',
    style: {
      backgroundColor: '#3b82f6',
      padding: 12,
      margin: 4,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  const buttonTextStyle = createStyle({
    className: 'text-white font-medium',
    style: { 
      color: 'white', 
      fontWeight: '500',
      fontSize: 16
    }
  });

  return (
    <View style={containerStyle} {...props}>
      {google && (
        <TouchableOpacity style={buttonStyle} onPress={onGoogleSignIn}>
          <Text style={buttonTextStyle}>Sign in with Google</Text>
        </TouchableOpacity>
      )}
      {apple && (
        <TouchableOpacity style={buttonStyle} onPress={onAppleSignIn}>
          <Text style={buttonTextStyle}>Sign in with Apple</Text>
        </TouchableOpacity>
      )}
      {facebook && (
        <TouchableOpacity style={buttonStyle} onPress={onFacebookSignIn}>
          <Text style={buttonTextStyle}>Sign in with Facebook</Text>
        </TouchableOpacity>
      )}
      {email && (
        <TouchableOpacity style={buttonStyle} onPress={onEmailSignIn}>
          <Text style={buttonTextStyle}>Sign in with Email</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SocialLogin;
