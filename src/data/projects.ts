import nike from "../asset/nike.png";
import modern from "../asset/modern.png";
import hypernex from "../asset/hypernex.png"; // Ensure this image is in the public folder

export type Project = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria...",
    src: nike, // ✅ imported image
    link: "https://example.com",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border...",
    src: modern,
    link: "https://example.com",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium...",
    src: hypernex, // must be in public folder!
    link: "https://example.com",
    color: "#C2491D"
  }
];
