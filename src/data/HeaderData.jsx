import React from 'react';
import { IoHomeOutline, IoVideocamOutline, IoTvOutline, IoSearchOutline, IoPersonCircleOutline, IoHome, IoVideocam, IoTv, IoPersonCircle, IoSearch } from "react-icons/io5";

import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";

export const NavListOutline = {
    "user": <IoPersonCircleOutline />,
    "search": <IoSearchOutline />,
    "home": <BiHomeAlt2 />,
    "movies": <IoVideocamOutline />,
    "tv": <IoTvOutline />
};

export const NavListSolid = {
    "user": <IoPersonCircle />,
    "search": <IoSearch />,
    "home": <BiSolidHomeAlt2 />,
    "movies": <IoVideocam />,
    "tv": <IoTv />
};