import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SocialButtonProps, providerConfig, SocialLoginProps } from './socialbuttons.type';
// Individual social button component
const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress }) => {
  const config = providerConfig[provider];
  
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-between px-4 py-3 my-2 rounded-lg ${config.backgroundColor}`}
    >
      <View className="flex-row items-center">
        <Ionicons name={config.iconName as any} size={24} color={config.iconColor} />
        <Text className={`ml-3 font-medium ${config.textColor}`}>{config.text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={provider === 'apple' ? 'white' : 'black'} />
    </TouchableOpacity>
  );
};



const SocialLogin: React.FC<SocialLoginProps> = ({
  onEmailSignIn = () => {},
  onGoogleSignIn = () => {},
  onFacebookSignIn = () => {},
  onAppleSignIn = () => {},
}) => {
  return (
    <View className="w-[80vw] bg-white p-4">
      <SocialButton provider="email" onPress={onEmailSignIn} />
      <SocialButton provider="google" onPress={onGoogleSignIn} />
      <SocialButton provider="facebook" onPress={onFacebookSignIn} />
      <SocialButton provider="apple" onPress={onAppleSignIn} />
    </View>
  );
};

export default SocialLogin;