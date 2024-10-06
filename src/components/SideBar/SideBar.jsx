import React, { useState , useContext} from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <>
      <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4 font-outfit sm:max-w-[640px] max-sm:hidden ">
        <div className="top">
          <img
            onClick={() => {
              setExtended(!extended);
            }}
            className="w-6 block ml-[10px] cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
          />
          <div onClick = {()=>{
            newChat();
          }}  className=" new-chat mt-[50px] inline-flex items-center gap-[7px] py-[10px] px[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[grey] cursor-pointer">
            <img
              className="w-[18px]  mx-4"
              src={assets.plus_icon}
              alt="new-chat"
            />
            {extended ? <p className="text-[14px] pr-6">New chat</p> : null}
          </div>
          {extended ? (
            <div className="recent flex flex-col  animate-[fadeIn 1.5s]">
              <p className="recent-title mt-[30px] mb-[20px]  animate-[fadeIn 1.5s]">Recent</p>
              {previousPrompt.map((item, index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
                  <img className="w-6" src={assets.message_icon} alt="message" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
              })}
             
            </div>
          ) : null}
        </div>
        <div className="bottom flex flex-col">
          <div className="bottom-item  recent-entry flex flex-row items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-6" src={assets.question_icon} alt="question" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry flex flex-row items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-6" src={assets.history_icon} alt="history" />
            {extended ? <p>Activiy</p> : null}
          </div>
          <div className="bottom-item recent-entry flex flex-row items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-6" src={assets.setting_icon} alt="settings" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
