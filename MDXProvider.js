/* eslint-disable */

import React, { Fragment } from "react";
import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import CopyToClipboard from "react-copy-to-clipboard";
import theme from "prism-react-renderer/themes/dracula";

const COPY = "Copy";
const COPIED = "Copied";

function Code({ children = "", className }) {
  const codeString = children.trim();
  const [copyState, setCopyState] = React.useState(COPY);

  const matches = (className && className.match(/language-(?<lang>.*)/)) || {
    groups: { lang: "js" },
  };
  const lang = matches.groups.lang;

  function handelOnCopy() {
    setCopyState(COPIED);
    setTimeout(() => setCopyState(COPY), 2000);
  }

  return (
    <div className="Code">
      <span className="Code-lang">{lang}</span>
      <CopyToClipboard
        class="CopyToClipboard"
        text={codeString}
        onCopy={handelOnCopy}
        tabIndex="0"
      >
        <div className="CopyToClipboard-content">
          <svg
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            fill={copyState === COPY ? "currentColor" : "#00000000"}
          >
            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
          </svg>
          {copyState}
        </div>
      </CopyToClipboard>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={lang}
        theme={{
          ...theme,
          plain: {
            ...theme.plain,
            backgroundColor: "var(--background-color-4)",
          },
        }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
}

function Blockquote({ children }) {
  return <blockquote className="Blockquote">{children}</blockquote>;
}

const components = {
  pre: ({ children: { props } }) => {
    return <Code {...props} />;
  },
  blockquote: ({ children: { props } }) => {
    return (
      <Fragment>
        <svg
          className="Blockquote-quotes"
          width="42"
          height="36"
          viewBox="0 0 244 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="left quotes">
            <path
              id="Path"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M201.697 96.0782C195.564 94.2781 189.431 93.3648 183.466 93.3648C174.253 93.3648 166.566 95.511 160.605 98.1393C166.352 76.6927 180.156 39.6871 207.656 35.5197C210.202 35.1336 212.289 33.2563 212.984 30.7293L218.994 8.81403C219.501 6.96069 219.201 4.97686 218.164 3.3685C217.127 1.76014 215.46 0.687015 213.593 0.426056C211.563 0.143794 209.494 0 207.444 0C174.436 0 141.746 35.123 127.952 85.4135C119.855 114.918 117.48 159.276 137.426 187.196C148.587 202.818 164.87 211.161 185.824 211.995C185.91 211.997 185.994 212 186.08 212C211.934 212 234.86 194.249 241.834 168.838C246 153.646 244.117 137.715 236.526 123.966C229.017 110.372 216.649 100.464 201.697 96.0782Z"
              fill="var(--blockquote-border-color)"
            />
            <path
              id="Path_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M114.525 123.967C107.016 110.371 94.6476 100.463 79.6961 96.077C73.563 94.277 67.4299 93.3636 61.4666 93.3636C52.2538 93.3636 44.5639 95.5098 38.6032 98.138C44.3497 76.6917 58.1545 39.6866 85.6569 35.5193C88.2036 35.1332 90.288 33.2559 90.9855 30.7289L96.9958 8.81392C97.5025 6.9606 97.2022 4.9768 96.1652 3.36846C95.1308 1.76012 93.4643 0.687006 91.5941 0.42605C89.5671 0.143792 87.4984 0 85.4453 0C52.4367 0 19.7467 35.1225 5.9498 85.4124C-2.14498 114.916 -4.51934 159.274 15.429 187.199C26.5877 202.819 42.8739 211.164 63.8252 211.995C63.9114 211.997 63.995 212 64.0838 212C89.9354 212 112.864 194.25 119.838 168.838C123.999 153.647 122.113 137.713 114.525 123.967Z"
              fill="rgb(74, 85, 104)"
            />
          </g>
        </svg>
        <Blockquote {...props} />
      </Fragment>
    );
  },
};

export function MDXProvider({ children }) {
  return (
    <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
  );
}
