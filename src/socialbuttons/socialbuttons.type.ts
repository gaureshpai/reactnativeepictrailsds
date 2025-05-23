interface SocialButtonProps {
  provider: "email" | "google" | "facebook" | "apple";
  onPress: () => void;
}

const providerConfig = {
  email: {
    text: "Sign in with E-mail",
    iconName: "mail",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "black",
  },
  google: {
    text: "Sign in with Google",
    iconName: "logo-google",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "#4285F4",
  },
  facebook: {
    text: "Sign in with Facebook",
    iconName: "logo-facebook",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "#1877F2",
  },
  apple: {
    text: "Sign in with Apple",
    iconName: "logo-apple",
    backgroundColor: "bg-black",
    textColor: "text-white",
    iconColor: "white",
  },
};

interface SocialLoginProps {
  email?: boolean;
  google?: boolean;
  facebook?: boolean;
  apple?: boolean;
  onEmailSignIn?: () => void;
  onGoogleSignIn?: () => void;
  onFacebookSignIn?: () => void;
  onAppleSignIn?: () => void;
}

export { SocialButtonProps, providerConfig, SocialLoginProps };