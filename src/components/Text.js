import React, { useState } from "react";
export default function Text(props) {
  const upperCase = () => {
    //   console.log("UpperCases")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Removed Symbos", "success");
  };
  const lowerCase = () => {
    //   console.log("UpperCases")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Text", "success");
  };
  const handleClear = () => {
    var text = document.getElementById("myTextArea");
    setText("");
    props.showAlert("Cleared Text", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking The Text", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnVhange")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "Wrong Way"
  // setText("Correct Way");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextArea"
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button
          disabled={text.length === 0}
          onClick={upperCase}
          className="btn btn-primary my-3 mx-1"
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={lowerCase}
          className="btn btn-primary my-3 mx-1"
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClear}
          className="btn btn-primary my-3 mx-1"
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          onClick={speak}
          className="btn btn-danger my-3 mx-1"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          onClick={handletextExtract}
          className="btn btn-primary my-3 mx-1"
        >
          Remove Symbols
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>

      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          In{" "}
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          Minutes You Will Read The Text You Wrote
        </p>
      </div>

      <h2>Preview</h2>
      <p>
        {text.length > 0
          ? text
          : "Enter something in the above textbox to preview it here"}
      </p>
    </>
  );
}
