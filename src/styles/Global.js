import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.regular};
  background: #fff;
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid #D3D5D7;
    margin-bottom: 16px;
  }

  a {
    color: ${color.primary};
  }

  .text-center {
    text-align: center;
  }

  .btn {
    border: none;
    border-radius: 4px;
    padding: 16px;
    text-decoration: none;

    &.btn-primary {
      background-color: #167FE9;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
    }

    &.btn-icon {
      align-items: center;
      background-color: #F3F4F6;
      display: inline-flex;
      justify-content: center;
      width: 50%;
      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}

    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;

    @media print {
      font-size: 13px;
    }
  }
`;