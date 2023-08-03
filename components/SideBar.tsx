import Image from 'next/image';
export default function SideBar() {
    return (
        <nav className="flex flex-col items-center w-1/12 h-screen border-2 border-blue-50 fixed shadow-lg shadow-blue-100 p-5">
            {/*Links*/}
            <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-400 flex items-center justify-center rounded-lg h-12 w-12 font-extrabold">
                    G
                </div>
                <div className="">
                <ul className="flex flex-col items-center gap-2">
                    <li>
                        <Image
                        src="assets/icons/home.svg"
                        alt="Home"
                        width={30}
                        height={30}
                        />
                    </li>
                    <li>
                        <Image
                        src="assets/icons/chat.svg"
                        alt="Chat"
                        width={30}
                        height={30}
                        />
                    </li>
                    <li>
                        <Image
                        src="assets/icons/search.svg"
                        alt=""
                        width={30}
                        height={30}
                        />
                    </li>
                    <li>
                        <Image
                        src=""
                        alt=""
                        width={30}
                        height={30}
                        />
                    </li>
                    <li>
                        <Image
                        src=""
                        alt=""
                        width={30}
                        height={30}
                        />
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}