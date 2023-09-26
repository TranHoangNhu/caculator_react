import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../scss/index.scss";
import useDarkMode from "./Themes";
import SoundEffect from "./SoundEffect";
import ShortcutKeyboard from "./ShortcutKeyboard";
import useCalc from "./Calc";

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { currentValue, handleClear, handleCalculate, handleButtonClick } =
    useCalc();
  return (
    <div
      className={`container ${isDarkMode ? "dark-mode" : ""}`}
      style={{ height: "100vh" }}
    >
      <header>
        <div className="d-flex w-100 my-5 gap-4 justify-content-center align-items-center toggle_dark_mode mx-auto col-xl-4 col-md-6 col-xs-12">
          <h1 className="text-start fs-1 fw-bold">CACULATOR ONLINE</h1>
          <span
            id="darkModeToggle"
            onClick={toggleDarkMode}
            className={isDarkMode ? "dark-mode" : ""}
          >
            <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
          </span>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="contain-caculator mx-auto col-xl-3 col-md-6 col-11">
            <div className={`caculator ${isDarkMode ? "dark-mode" : ""}`}>
              <div className="buttons">
                <h2 id="value">{currentValue}</h2>
                <span id="clear" onClick={handleClear}>
                  CLEAR
                </span>
                <span onClick={() => handleButtonClick("/")}>/</span>
                <span onClick={() => handleButtonClick("*")}>*</span>
                <span onClick={() => handleButtonClick("7")}>7</span>
                <span onClick={() => handleButtonClick("8")}>8</span>
                <span onClick={() => handleButtonClick("9")}>9</span>
                <span onClick={() => handleButtonClick("-")}>-</span>
                <span onClick={() => handleButtonClick("4")}>4</span>
                <span onClick={() => handleButtonClick("5")}>5</span>
                <span onClick={() => handleButtonClick("6")}>6</span>
                <span
                  style={{ gridRow: "span 2" }}
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </span>
                <span onClick={() => handleButtonClick("1")}>1</span>
                <span onClick={() => handleButtonClick("2")}>2</span>
                <span onClick={() => handleButtonClick("3")}>3</span>
                <span
                  style={{ gridColumn: "span 2" }}
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </span>
                <span onClick={() => handleButtonClick(".")}>.</span>
                <span id="equal" onClick={handleCalculate}>
                  =
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SoundEffect />
      <ShortcutKeyboard />
    </div>
  );
}
