import React, { useState, useContext } from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import "./App.css";
import Translate from "./components/Translate";
import Button from "./components/button";
import { BUTTON_TYPES } from "./common/data/button";
import { ReactComponent as Logo } from "./wordsack.svg";
import HireExperts from "./components/hire-experts";
import WordCounter from "./components/WordCounter";
import TranslationContext from "./context/Translation";

function App() {
  const { inputText, inputTextWords, setInputTextWords } =
    useContext(TranslationContext);

  const onButtonClick = () => {
    if (inputText.length > 0) {
      setInputTextWords(WordCounter({ text: inputText }));
    }
  };

  return (
    <div className="App">
      <Route path="/Wordsack">
        <Translate />

        <Link to={"/hire-experts"}>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText={"Hire Experts"}
            iconPos="LEFT"
            onButtonClick={onButtonClick}
          />
        </Link>
        <Link to={"/Wordsack"}>
          <Logo className="logo" />
        </Link>
      </Route>
      <Route path="/hire-experts">
        <HireExperts />
        <Link to={"/Wordsack"}>
          <Logo className="logo" />
        </Link>
      </Route>
    </div>
  );
}

export default App;
