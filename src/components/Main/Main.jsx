import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { useContext } from "react";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main flex-1 min-h-screen pb-[15vh] relative">
        <div className="nav flex items-center justify-between p-[20px] text-[#585858]">
          <p>Gemini</p>
          <img
            className="w-[40px] rounded-[50%]"
            src={assets.user_icon}
            alt="user_icon"
          />
        </div>

        <div className="main-container max-w-[900px] m-auto ">
          {!showResult ? (
            <>
              <div className="greet my-[40px] mx-[0px] text-[40px] font-[500] p-[20px] text-[#c4c7c5] ">
                <p>
                  <span>Hello, Nitesh</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]">
                <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Suggest beautiful plcaes to seee on an upcoming road trip
                  </p>
                  <img
                    className="w-[35px] p-[5px] bg-white rounded-[20px] absolute right-[10px] bottom-[10px]"
                    src={assets.compass_icon}
                    alt="compass_icon"
                  />
                </div>
                <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Briefly sumarize this concept: urban planning
                  </p>
                  <img
                    className="w-[35px] p-[5px] bg-white rounded-[20px] absolute right-[10px] bottom-[10px]"
                    src={assets.bulb_icon}
                    alt="bulb_icon"
                  />
                </div>
                <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Brainstorm team bonding activities for our work retreat
                  </p>
                  <img
                    className="w-[35px] p-[5px] bg-white rounded-[20px] absolute right-[10px] bottom-[10px]"
                    src={assets.message_icon}
                    alt="message_icon"
                  />
                </div>
                <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px] ">
                    Improve the readability of the following code
                  </p>
                  <img
                    className="w-[35px] p-[5px] bg-white rounded-[20px] absolute right-[10px] bottom-[10px]"
                    src={assets.code_icon}
                    alt="code_icon"
                  />
                </div>
              </div>
              {/* result section */}
            </>
          ) : (
            <div className="result py-[0px] px-[5%] max-h-[70vh] overflow-y-auto scrollbar-hide  ">
              <div className="result-title my-[40px] mx=[0px] flex items-center gap-[20px]">
                <img
                  className="w-[40px] rounded-[50%] "
                  src={assets.user_icon}
                  alt="user_icon"
                />
                <p className="text-[20px] font-[500]">{recentPrompt}</p>
              </div>
              <div className="result-data flex items-start gap-[20px]  ">
                <img
                  className="w-[40px] rounded-[50%] "
                  src={assets.gemini_icon}
                  alt="gemini_icon"
                />
                {loading ? (
                  <div className="loader   w-full flex flex-col gap-[10px] ">
                    <hr className=" " />
                    <hr className=" " />
                    <hr className=""    />
                  </div>
                ) : (
                  <p clasName="text-[17px] font-[300] leading-[1.8]" dangerouslySetInnerHTML={{ __html: resultData }} />
                )}
              </div>
            </div>
          )}

          {/* chat section */}
          <div className="  main-bottom absolute bottom-[0px] w-full max-w-[900px] py-[0] px-[20px] m-auto  ">
            <div className=" max-sm:gap-[40px]  max-sm:px-[10px] max-sm:py-[5px]serch-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] rounded-[50px] py-[10px] px-[20px] ">
              <input
                className="flex-1 bg-transparent border-none outline-none p-[8px] text-[17px] text-[#585858] max-w-[600px] max-sm:flex-none w-[150px]"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Ask me anything"
              />
              <div className="flex items-center gap-[15px] ">
                {/* <img 
                  className="w-[24px] cursor-pointer max-sm:w-[20px]"
                  src={assets.gallery_icon}
                  alt="gallery_icon"
                /> */}
                
                {/* <img
                  className="w-[24px] cursor-pointer max-sm:w-[20px]"
                  src={assets.mic_icon}
                  alt="microphone_icon"
                /> */}

                {input ?   <img
                  className="w-[24px] cursor-pointer max-sm:w-[20px]"
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                /> : null }
              
              </div>
            </div>
            <p className="bottom-info text-[13px] my-[15px] mx-[auto] text-center font-[300] ">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. your privacy and Gemini Apps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
