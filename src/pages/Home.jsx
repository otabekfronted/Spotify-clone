import React, { useEffect, useState } from "react";
import http from "../axios";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Home() {
    const [featured, setFeatured] = useState([]);
    const [toplists, setToplists] = useState([]);
    const [yourlists, setYourlists] = useState([]);
    const [recently, setRecently] = useState([]);
    const [jump, setJump] = useState([]);
    const [uniquely, setUniquely] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [yourShowAll, setYourShowAll] = useState(false);
    const [recentlyShowAll, setRecentlyShowAll] = useState(false);
    const [jumpShow, setJumpShow] = useState(false);
    const [uniquelyShow, setUniquelyShow] = useState(false);
    // const navi
    const navigate = useNavigate();
    const handlePlaylistClick = (id) => {
        navigate(`/details/${id}`);
    };
    useEffect(() => {
        http.get("featured-playlists")
            .then((response) => {
                setFeatured(response.data.playlists.items.slice(0, 6));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        http.get("categories/toplists/playlists")
            .then((response) => {
                setToplists(response.data.playlists.items);
                console.log(response.data.playlists.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        http.get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
            .then((response) => {
                setYourlists(response.data.playlists.items);
                console.log(response.data.playlists.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        http.get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
            .then((response) => {
                setRecently(response.data.playlists.items);
                console.log(response.data.playlists.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        http.get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
            .then((response) => {
                setJump(response.data.playlists.items);
                console.log(response.data.playlists.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        http.get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
            .then((response) => {
                setUniquely(response.data.playlists.items);
                console.log(response.data.playlists.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function showPlaylists() {
        setShowAll((prev) => !prev);
    }

    function YourPlaylists() {
        setYourShowAll((prev) => !prev);
    }
    function RecnetlyPlaylists() {
        setRecentlyShowAll((prev) => !prev);
    }
    function jumpShowPlaylists() {
        setJumpShow((prev) => !prev);
    }
    function uniquelyShowPlaylists() {
        setUniquelyShow((prev) => !prev);
    }

    return (
        <div className="bg-gradient-to-b from-purple-800 to-black min-h-screen">
            <div className="p-7">
                <div className="flex gap-4">
                    <GrPrevious className="w-10 h-10 py-2 px-3 text-white bg-[#000] rounded-full" />
                    <GrNext className="w-10 h-10 py-2 px-3 text-white bg-[#000] rounded-full" />
                </div>
                <h1 className="mt-7 text-white text-[39px] font-circular font-bold tracking-[1px]">
                    Good afternoon
                </h1>
                <div className="grid grid-cols-2 gap-7 mt-7">
                    {featured.length > 0 &&
                        featured.map((value, index) => (
                            <div
                                key={index}
                                onClick={() => handlePlaylistClick(value.id)}
                            >
                                <div className="flex items-center gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                    <img
                                        src={value.images[0]?.url}
                                        className="w-20 h-20 rounded-l-md"
                                        alt=""
                                    />
                                    <h2 className="text-white font-circular font-bold text-[20px]">
                                        {value.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="bg-[#121212] p-7 rounded-lg mt-7">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">
                        Your top mixes
                    </h2>
                    <button
                        onClick={showPlaylists}
                        className="font-bold text-[16px] text-[#ADADAD]"
                    >
                        {showAll ? "SHOW LESS" : "SEE ALL"}
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-7">
                    {toplists.length > 0 &&
                        (showAll
                            ? toplists.map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              ))
                            : toplists.slice(0, 4).map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              )))}
                </div>
            </div>
            {/* ////////// */}
            <div className="bg-[#121212] p-7 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">
                        Made For You
                    </h2>
                    <button
                        onClick={YourPlaylists}
                        className="font-bold text-[16px] text-[#ADADAD]"
                    >
                        {yourShowAll ? "SHOW LESS" : "SEE ALL"}
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-7">
                    {yourlists.length > 0 &&
                        (yourShowAll
                            ? yourlists.map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              ))
                            : yourlists.slice(0, 4).map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              )))}
                </div>
            </div>
            <div className="bg-[#121212] p-7 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">
                        Recently played
                    </h2>
                    <button
                        onClick={RecnetlyPlaylists}
                        className="font-bold text-[16px] text-[#ADADAD]"
                    >
                        {recentlyShowAll ? "SHOW LESS" : "SEE ALL"}
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-7">
                    {recently.length > 0 &&
                        (recentlyShowAll
                            ? recently.map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              ))
                            : recently.slice(0, 4).map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              )))}
                </div>
            </div>
            <div className="bg-[#121212] p-7 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">
                        Recently played
                    </h2>
                    <button
                        onClick={jumpShowPlaylists}
                        className="font-bold text-[16px] text-[#ADADAD]"
                    >
                        {jumpShow ? "SHOW LESS" : "SEE ALL"}
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-7">
                    {jump.length > 0 &&
                        (jumpShow
                            ? jump.map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              ))
                            : jump.slice(0, 4).map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              )))}
                </div>
            </div>
            <div className="bg-[#121212] p-7 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">
                        Uniquely Yours
                    </h2>
                    <button
                        onClick={uniquelyShowPlaylists}
                        className="font-bold text-[16px] text-[#ADADAD]"
                    >
                        {uniquelyShow ? "SHOW LESS" : "SEE ALL"}
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-7">
                    {uniquely.length > 0 &&
                        (uniquelyShow
                            ? uniquely.map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              ))
                            : uniquely.slice(0, 4).map((val, ind) => (
                                  <div
                                      key={ind}
                                      onClick={() =>
                                          handlePlaylistClick(val.id)
                                      }
                                  >
                                      <div className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer">
                                          <img
                                              src={val.images[0]?.url}
                                              className="w-[182px] h-[182px] rounded-lg object-cover"
                                              alt=""
                                          />
                                          <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                                              {val.name}
                                          </h4>
                                          <p className="text-white font-circular mt-4">
                                              {val.description}
                                          </p>
                                      </div>
                                  </div>
                              )))}
                </div>
            </div>
        </div>
    );
}

export default Home;
