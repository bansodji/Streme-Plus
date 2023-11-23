import React from 'react';
import { IoHomeOutline, IoVideocamOutline, IoTvOutline, IoSearchOutline, IoPersonCircleOutline, IoHome, IoVideocam, IoTv, IoPersonCircle, IoSearch } from "react-icons/io5";
import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillHome,AiOutlineHome } from "react-icons/ai";

export const NavListOutline = {
    "user": <IoPersonCircleOutline />,
    "search": <IoSearchOutline />,
    "home": <AiOutlineHome />,
    "movies": <IoVideocamOutline />,
    "tv": <IoTvOutline />
};

export const NavListSolid = {
    "user": <IoPersonCircle />,
    "search": <IoSearch />,
    "home": <AiFillHome />,
    "movies": <IoVideocam />,
    "tv": <IoTv />
};