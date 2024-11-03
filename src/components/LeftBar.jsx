import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FcLike } from "react-icons/fc";

function LeftBar() {
    return (
        <div>
            <nav className="pt-16 pl-7 pr-12">
                <ul className="space-y-4">
                    <li className="hover:opacity-75 duration-200 flex items-center gap-5">
                        <GoHomeFill className="w-[35px] h-[35px] text-white" />
                        <a
                            href="#"
                            className="font-circular font-bold text-[18px]"
                        >
                            Home
                        </a>
                    </li>
                    <li className="hover:opacity-75 duration-200 flex items-center gap-5">
                        <FaSearch className="w-[25px] h-[28px] text-white" />
                        <a
                            href="#"
                            className="font-circular font-bold text-[18px]"
                        >
                            Search
                        </a>
                    </li>
                    <li className=" hover:opacity-75 duration-200 flex items-center gap-5">
                        <MdLibraryMusic className="w-[25px] h-[28px] text-white" />
                        <a
                            href="#"
                            className="font-circular font-bold text-[18px]"
                        >
                            Your Library
                        </a>
                    </li>
                    <li className="hover:opacity-75 duration-200 flex items-center gap-5">
                        <MdOutlineCreateNewFolder className="w-[25px] h-[28px] text-white" />
                        <a
                            href="#"
                            className="font-circular font-bold text-[18px]"
                        >
                            Create Playlist
                        </a>
                    </li>
                    <li className=" hover:opacity-75 duration-200 flex items-center gap-5">
                        <FcLike className="w-[25px] h-[28px] text-white" />
                        <a
                            href="#"
                            className="font-circular font-bold text-[18px]"
                        >
                            Liked Songs
                        </a>
                    </li>
                </ul>
                <span className="h-[1px] bg-[#636262] w-[220px] block my-5"></span>

                <ul className="playlists space-y-4 ">
                    <li className="hover:opacity-75">
                        <a href="#">Chill Mix</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">Insta Hits</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">Your Top Songs 2021</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">Mellow Songs</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">Anime Lofi & Chillhop Music</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">BG Afro “Select” Vibes</a>
                    </li>
                    <li className="hover:opacity-75">
                        <a href="#">Afro “Select” Vibes</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftBar;
