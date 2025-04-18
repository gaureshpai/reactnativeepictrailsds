// Define the props for our social button component
interface SocialButtonProps {
  provider: "email" | "google" | "facebook" | "apple";
  onPress: () => void;
}

// Define the provider-specific styling and icons
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
// Main component that renders all social login buttons
interface SocialLoginProps {
  onEmailSignIn?: () => void;
  onGoogleSignIn?: () => void;
  onFacebookSignIn?: () => void;
  onAppleSignIn?: () => void;
}

export { SocialButtonProps, providerConfig, SocialLoginProps };