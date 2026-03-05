import { useState } from "react";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const DecryptText = ({ text }) => {
  const [display, setDisplay] = useState(text);

  const handleHover = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[
              Math.floor(Math.random() * letters.length)
            ];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span
      onMouseEnter={handleHover}
      style={{
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      {display}
    </span>
  );
};
