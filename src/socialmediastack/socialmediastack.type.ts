export type VideoContent = {
  type: "video";
  uri: string;
};

export type ImageContent = {
  type: "image";
  imageUri: string;
};

export type TextContent = {
  type: "text";
  text: string;
  backgroundColor?: string;
};

// Union type for all possible content types
export type ContentItem = VideoContent | ImageContent | TextContent;

// Component props interface
export interface SocialMediaContainerProps {
  contentItems: ContentItem[];
  duration?: number;
  onActiveIndexChange?: (index: number) => void;
}

export interface SocialMediaStackProps {
  children: React.ReactNode;
}
export interface StoryProgressBarsProps {
  totalStories: number;
  activeStoryIndex: number;
}
