export interface Metadata {
  title: string;
  description?: string;
  og?: {
    image: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const sharedMetadata: Metadata = {
  title: "Mohammed-Yousuf Hamid - Web Developer",
  description: "An experienced Web Developer with a passion for JavaScript, React and Go.",
  og: {
    image: "og.jpg",
    alt: "Mohammed-Yousuf Hamid",
    width: 1920,
    height: 1080,
  },
};
