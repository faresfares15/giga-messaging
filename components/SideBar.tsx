"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SideBar() {
  const [chatIconUrl, setChatIconUrl] = useState<string>("assets/icons/chat.svg");
  const [chatIconClicked, setChatIconClicked] = useState<boolean>(false)
  const [homeIconUrl, setHomeIconUrl] = useState<string>("assets/icons/home.svg");
  const [homeIconClicked, setHomeIconClicked] = useState<boolean>(false)
  const [searchIconsUrl, setSearchIconsUrl] = useState<string>("assets/icons/search.svg");
  const [searchIconClicked, setSearchIconClicked] = useState<boolean>(false)
  const [settingsIconsUrl, setSettingsIconsUrl] = useState<string>("assets/icons/settings.svg");
  const [settingsIconClicked, setSettingsIconClicked] = useState<boolean>(false)

  const resetIcons = () => {
    setHomeIconUrl("assets/icons/home.svg")
    setChatIconUrl("assets/icons/chat.svg")
    setSearchIconsUrl("assets/icons/search.svg")
    setSettingsIconsUrl("assets/icons/settings.svg")
  }
const resetClicked = () => {
    setHomeIconClicked(false)
    setChatIconClicked(false)
    setSearchIconClicked(false)
    setSettingsIconClicked(false)
}

  return (
    <nav className="max-md:hidden flex flex-col items-center h-screen shadow-lg shadow-purple-100 pb-6 pt-4 pr-4 pl-4">
      {/*Links*/}
      <div className="flex flex-col items-center gap-12">
        <Link href="/">
          <motion.div
              className="bg-primary-purple flex items-center justify-center rounded-[0.875rem] h-14 w-14 font-extrabold text-white"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              onClick={() => {
                resetClicked()
                resetIcons()
              }}
          >
            G
          </motion.div>
        </Link>
        <div className="">
          <ul className="flex flex-col items-center gap-8">
            <motion.li
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Link href="/home">
                <Image
                  src={homeIconUrl}
                  alt="Home"
                  width={30}
                  height={30}
                  onMouseEnter={() => setHomeIconUrl("assets/icons/homeClicked.svg")}
                  onMouseLeave={() => {
                    if (!homeIconClicked) {
                      setHomeIconUrl("assets/icons/home.svg")
                    }
                  }}
                  onClick={() => {
                    resetClicked()
                    resetIcons()
                   setHomeIconClicked(true)
                  setHomeIconUrl("assets/icons/homeClicked.svg")}
                  }
                />
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Link href="/chat">
                <Image
                  src={chatIconUrl}
                  alt="Chat"
                  width={30}
                  height={30}
                  onMouseEnter={() => setChatIconUrl("assets/icons/chatClicked.svg")}
                  onMouseLeave={() =>{
                    if (!chatIconClicked) {
                      setChatIconUrl("assets/icons/chat.svg")
                    }
                  }}
                  onClick={() =>{
                    resetClicked()
                    resetIcons()
                    setChatIconClicked(true)
                    setChatIconUrl("assets/icons/chatClicked.svg")
                  }}
                />
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Link href="/search">
                <Image
                  src={searchIconsUrl}
                  alt=""
                  width={30}
                  height={30}
                  onMouseEnter={() => setSearchIconsUrl("assets/icons/searchClicked.svg")}
                  onMouseLeave={() =>{
                    if (!searchIconClicked) {
                      setSearchIconsUrl("assets/icons/search.svg")
                    }
                  }}
                  onClick={() =>{
                    resetClicked()
                    resetIcons()
                    setSearchIconClicked(true)
                    setSearchIconsUrl("assets/icons/searchClicked.svg")
                  }}
                />
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.div
        className="mt-auto"
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on click
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <Link href="/settings">
          <Image
            src={settingsIconsUrl}
            alt="Settings"
            width={30}
            height={30}
            onMouseEnter={() => setSettingsIconsUrl("assets/icons/settingsClicked.svg")}
            onMouseLeave={() =>{
              if (!settingsIconClicked) {
                setSettingsIconsUrl("assets/icons/settings.svg")
              }
            }}
            onClick={() =>{
              resetClicked()
              resetIcons()
              setSettingsIconClicked(true)
              setSettingsIconsUrl("assets/icons/settingsClicked.svg")
            }}
          />
        </Link>
      </motion.div>
    </nav>
  );
}
