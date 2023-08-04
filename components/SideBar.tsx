"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SideBar() {
  const [chatIconUrl, setChatIconUrl] = useState<string>(
    "assets/icons/chat.svg",
  );
  const [homeIconUrl, setHomeIconUrl] = useState<string>(
    "assets/icons/home.svg",
  );
  const [searchIconsUrl, setSearchIconsUrl] = useState<string>(
    "assets/icons/search.svg",
  );
  const [settingsIconsUrl, setSettingsIconsUrl] = useState<string>(
    "assets/icons/settings.svg",
  );
  return (
    <nav className="flex flex-col items-center h-screen shadow-lg shadow-purple-100 pb-6 pt-4 pr-4 pl-4">
      {/*Links*/}
      <div className="flex flex-col items-center gap-12">
        <Link href="/home">
          <motion.div
              className="bg-primary-purple flex items-center justify-center rounded-[0.875rem] h-14 w-14 font-extrabold text-white"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
                  onMouseEnter={() =>
                    setHomeIconUrl("assets/icons/homeClicked.svg")
                  }
                  onMouseLeave={() => setHomeIconUrl("assets/icons/home.svg")}
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
                  onMouseEnter={() =>
                    setChatIconUrl("assets/icons/chatClicked.svg")
                  }
                  onMouseLeave={() => setChatIconUrl("assets/icons/chat.svg")}
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
                  onMouseEnter={() =>
                    setSearchIconsUrl("assets/icons/searchClicked.svg")
                  }
                  onMouseLeave={() =>
                    setSearchIconsUrl("assets/icons/search.svg")
                  }
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
            onMouseEnter={() =>
              setSettingsIconsUrl("assets/icons/settingsClicked.svg")
            }
            onMouseLeave={() =>
              setSettingsIconsUrl("assets/icons/settings.svg")
            }
          />
        </Link>
      </motion.div>
    </nav>
  );
}
