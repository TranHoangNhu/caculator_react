import { useEffect } from "react";

export default function SoundEffect() {
  useEffect(() => {
    const toggleModeSound = new Audio("/audios/switch-mode.mp3");
    const keyTouchShortSound = new Audio("/audios/typing-on-laptop-short.mp3");
    const keyTouchLongSound = new Audio("/audios/typing-on-laptop-long.mp3");

    const toggleMode = document.querySelector("#darkModeToggle");
    const keyTyping = document.querySelectorAll(".buttons span");

    const handleToggleModeClick = () => {
      toggleModeSound.currentTime = 0;
      toggleModeSound.play();
    };

    const handleKeyClick = (index) => {
      if (index !== 0 && index !== 16) {
        keyTouchShortSound.currentTime = 0;
        keyTouchShortSound.play();
      } else {
        keyTouchShortSound.currentTime = 0;
        keyTouchLongSound.currentTime = 0;
        keyTouchLongSound.play();
      }
    };

    toggleMode.addEventListener("click", handleToggleModeClick);
    keyTyping.forEach((thisKey, index) => {
      thisKey.addEventListener("click", () => handleKeyClick(index));
    });

    // Cleanup: Loại bỏ các event listener khi thành phần unmounts
    return () => {
      toggleMode.removeEventListener("click", handleToggleModeClick);
      keyTyping.forEach((thisKey, index) => {
        thisKey.removeEventListener("click", () => handleKeyClick(index));
      });
    };
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi thành phần được gắn kết

  // return null;
}
