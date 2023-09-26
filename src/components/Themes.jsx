import { useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
