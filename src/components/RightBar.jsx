import { IoPersonAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function RightBar() {
    return (
        <div className="pt-7 px-5">
            <div className="flex items-center justify-between font-circular">
                <h2 className="font-bold text-xl text-[#CCCCCC]">
                    Friend Activity
                </h2>
                <div className="flex items-center gap-3">
                    <IoPersonAddOutline className="text-[#B3B3B3] w-[25px] h-[28px] cursor-pointer" />
                    <FaPlus className="rotate-45 text-[#B3B3B3] w-[25px] h-[28px] cursor-pointer" />
                </div>
            </div>
            <p className="font-circular text-[16px] mt-7 mb-5">
                Let friends and followers on Spotify see what you’re listening
                to.
            </p>
            <div className="space-y-6">
                <img src="./rightBar.svg" alt="" />
                <img src="./rightBar.svg" alt="" />
                <img src="./rightBar.svg" alt="" />
            </div>
            <p className="mt-4">
                Go to Settings Social and enable “Share my listening activity on
                Spotify.’ You can turn this off at any time.
            </p>
            <button className="mt-2 w-[233px] h-[62px] rounded-[40px] bg-white text-[#171717] font-bold text-[18px]">
                SETTINGS
            </button>
        </div>
    );
}

export default RightBar;
