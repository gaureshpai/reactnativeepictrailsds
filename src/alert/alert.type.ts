const alertStyles = {
  information: {
    backgroundColor: "#E8E8E8",
    color: "#1F1F1F",
    secondaryColor: "#DDDDDD",
    secondaryTextColor: "#1F1F1F",
    icon: "information-circle",
  },
  success: {
    backgroundColor: "#D3EFDA",
    color: "#166C3B",
    secondaryColor: "#B1EAC2",
    secondaryTextColor: "#166C3B",
    icon: "checkmark-circle",
  },
  warning: {
    backgroundColor: "#FEE2D4",
    color: "#C54600",
    secondaryColor: "#FFD3BC",
    secondaryTextColor: "#C54600",
    icon: "warning",
  },
  error: {
    backgroundColor: "#FFE1DE",
    color: "#950F22",
    secondaryColor: "#FFD2CD",
    secondaryTextColor: "#950F22",
    icon: "alert-circle",
  },
};

type AlertType = "information" | "success" | "warning" | "error";

interface AlertProps {
  message: string;
  label?: string;
  description?: string;
  icon?: boolean;
  inline?: boolean;
  suppressed?: boolean;
  type?: AlertType;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

export { alertStyles, AlertProps };