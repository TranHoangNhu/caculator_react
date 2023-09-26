import { useEffect } from "react";

export default function ShortcutKeyboard() {
  useEffect(() => {
    const clearCalc = document.querySelector("#clear");
    const resultCalc = document.querySelector("#equal");

    const spanElements = document.querySelectorAll("span:not([class])");
    const keycodeMapping = {
      "/": 111,
      "*": 106,
      7: 103,
      8: 104,
      9: 105,
      "-": 109,
      4: 100,
      5: 101,
      6: 102,
      "+": 107,
      1: 97,
      2: 98,
      3: 99,
      0: 96,
      ".": 110,
    };

    spanElements.forEach((span) => {
      span.addEventListener("click", () => {
        const spanContent = span.textContent;
        const keycode = keycodeMapping[spanContent];

        if (keycode !== undefined) {
          console.log("Span content:", spanContent);
          console.log("Keycode:", keycode);
        }
      });
    });

    window.addEventListener("keydown", (event) => {
      const keycode = event.keyCode || event.which;

      if (keycode === 8) {
        clearCalc.classList.add("active");
        clearCalc.click();
      }

      if (keycode === 13) {
        resultCalc.classList.add("active");
        resultCalc.click();
      }

      const spanContent = Object.keys(keycodeMapping).find(
        (content) => keycodeMapping[content] === keycode
      );

      if (spanContent) {
        spanElements.forEach((span) => {
          if (span.textContent === spanContent) {
            span.classList.add("active");
            span.click();
          }
        });
      }
    });

    window.addEventListener("keyup", (event) => {
      const keycode = event.keyCode || event.which;

      if (keycode === 8) {
        clearCalc.classList.remove("active");
      }

      if (keycode === 13) {
        resultCalc.classList.remove("active");
      }

      const spanContent = Object.keys(keycodeMapping).find(
        (content) => keycodeMapping[content] === keycode
      );

      if (spanContent) {
        spanElements.forEach((span) => {
          if (span.textContent === spanContent) {
            span.classList.remove("active");
          }
        });
      }
    });

    return () => {
      // Loại bỏ các event listener khi component unmounts
      spanElements.forEach((span) => {
        span.removeEventListener("click", () => {});
      });

      window.removeEventListener("keydown", () => {});
      window.removeEventListener("keyup", () => {});
    };
  }, []);

  return null;
}
