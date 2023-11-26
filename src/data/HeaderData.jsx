import React from 'react';
import { IoVideocamOutline, IoTvOutline, IoSearchOutline, IoPersonCircleOutline, IoVideocam, IoTv, IoPersonCircle, IoSearch } from "react-icons/io5";
import { GoHome,GoHomeFill  } from "react-icons/go";

export const NavListOutline = {
    "user": <IoPersonCircleOutline />,
    "search": <IoSearchOutline />,
    "home": <GoHome />,
    "movies": <IoVideocamOutline />,
    "tv": <IoTvOutline />
};

export const NavListSolid = {
    "user": <IoPersonCircle />,
    "search": <IoSearch />,
    "home": <GoHomeFill />,
    "movies": <IoVideocam />,
    "tv": <IoTv />
};