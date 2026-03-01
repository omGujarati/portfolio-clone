import { useEffect, useState } from "react";

export const TypingText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [pause, setPause] = useState(false); // ✅ NEW

  useEffect(() => {
    if (pause) return; // ✅ stop animation temporarily

    const currentText = texts[index];

    const timeout = setTimeout(() => {
      if (forward) {
        setSubIndex((prev) => prev + 1);

        // ✅ STOP AFTER FULL TEXT
        if (subIndex === currentText.length) {
          setPause(true);

          setTimeout(() => {
            setForward(false);
            setPause(false);
          }, 1500); // ⬅ STOP TIME (1.5s)
        }
      } else {
        setSubIndex((prev) => prev - 1);

        // ✅ STOP AFTER DELETE
        if (subIndex === 0) {
          setPause(true);

          setTimeout(() => {
            setForward(true);
            setIndex((prev) => (prev + 1) % texts.length);
            setPause(false);
          }, 600);
        }
      }
    }, forward ? 90 : 45);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, texts, pause]);

  return (
    <>
      {texts[index].substring(0, subIndex)}
      <span className="typingCursor">|</span>
    </>
  );
};