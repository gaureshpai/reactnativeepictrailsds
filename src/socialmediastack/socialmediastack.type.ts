// Improved type for image content to handle both remote and local images
export type ImageContent = {
  type: 'image';
  imageUri: string;
  isLocal?: boolean;
};

export type VideoContent = {
  type: 'video';
  uri: string;
};

export type TextContent = {
  type: 'text';
  text: string;
  backgroundColor?: string;
};

export type ContentItem = VideoContent | ImageContent | TextContent;

export interface SocialMediaContainerProps {
  contentItems: ContentItem[];
  duration?: number;
  onActiveIndexChange?: (index: number) => void;
  index?: number;
}


export interface SocialMediaStackProps {
  children: React.ReactNode;
}
export interface StoryProgressBarsProps {
  totalStories: number;
  activeStoryIndex: number;
}
