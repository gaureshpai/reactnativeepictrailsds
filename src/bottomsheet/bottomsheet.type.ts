import { ReactNode } from "react";
export interface Comment {
    id?: string | number;
    userInitials?: string;
    userName?: string;
    likes?: number;
    time?: string;
    text?: string;
  }

  export interface BottomSheetProps {
    showKnob?: boolean;
    showButton?: boolean;
    buttonLabel?: string;
    onButtonPress?: () => void;
    showComments?: boolean;
    comments?: Comment[];
    onAddComment?: (text: string) => void;
    onLikeComment?: (index: number) => void;
    onReplyComment?: (index: number) => void;
    children?: ReactNode;
    containerStyle?: object;
  }