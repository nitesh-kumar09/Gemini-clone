import { createContext, useState } from "react";
import runChat from "../config/geminiApi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");

  const [recentPrompt, setRecentPrompt] = useState("");

  const [previousPrompt, setPreviousPrompt] = useState([]);

  const [showResult, setShowResult] = useState(false);

  const [loading, setLoading] = useState(false);

  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prevPara) => prevPara + nextWord);
    }, 75 * index);
  };

  const newChat = () =>{
    setLoading(false);
    setShowResult(false);
    setInput("");
    setResultData("");
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let promptResponse;
    if (prompt !== undefined) {
      promptResponse = await runChat(prompt);
      setRecentPrompt(prompt);
    }
    else{
        setPreviousPrompt((prevPrompt) => [...prevPrompt, input]);
        promptResponse = await runChat(input);
        setRecentPrompt(input);
    }
    let responseArray = promptResponse.split("**");

    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br>");

    //   let newResponse3 = newResponse.split("###").join("<hr>" || "<br>");

    //   setResultData(newResponse2)

    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
