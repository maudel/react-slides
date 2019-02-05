import { hack as theme } from "mdx-deck/themes";
import prismStyle from "react-syntax-highlighter/styles/prism/atom-dark";
import prismBash from "react-syntax-highlighter/languages/prism/bash";

const reactTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#20232a",
    codeBackground: "rgb(40, 44, 52)",
    heading: "rgb(97, 218, 251)",
    link: "rgb(97, 218, 251)",
    pre: "rgb(136, 198, 190)",
    preBackground: "rgb(40, 44, 52)",
    text: "#fff"
  },
  css: {
    ...theme.css,
    fontWeight: 200
  },
  font:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  link: {
    ":hover": {
      color: "#fff"
    }
  },
  monospace: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
  prism: {
    style: prismStyle,
    languages: {
      bash: prismBash
    }
  }
};

export default reactTheme;
