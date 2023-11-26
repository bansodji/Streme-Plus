import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from "react-icons/fa6";

const Select = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    z-index: 999;
    
    .selected{
        background: none;
        border: 1px solid ${({ theme }) => theme.colors.grey};        
        padding: 4px 12px;
        border-radius: 7px;
        cursor: pointer;
        width: max-content;
        color: ${({ theme }) => theme.colors.text};
        border-color: ${({ theme }) => theme.colors.text};
        text-transform: uppercase;

        &:hover{
            color: ${({ theme }) => theme.colors.theme1};
            border-color: ${({ theme }) => theme.colors.theme1};
        }
    }

    .options{
        width: 200px;
        max-height: 300px;
        overflow-y: scroll;
        border: 1px solid ${({ theme }) => theme.colors.grey};
        background-color: ${({ theme }) => theme.colors.surface};
        padding: 6px 10px;
        border-radius: 7px;
        color: ${({ theme }) => theme.colors.heading};
        position: absolute;
        top: 110%;

        /* Scrollbar Styles */
        &::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.surface}; /* Color of the scrollbar track */
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.grey}; /* Color of the scrollbar thumb/handle */
          border-radius: 4px; /* Round the corners of the thumb */
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: ${({ theme }) => theme.colors.theme1}; /* Color of the thumb on hover */
        }

        li{
            padding: 5px;
            margin: 2px 0;
            border-radius: 6px;
            cursor: pointer;

            &:hover{
              background-color: ${({ theme }) => theme.colors.theme1};
              color: ${({ theme }) => theme.colors.white};
            }  
        }
    }

    /* .hidden{
        display: none;
    } */

    .active{
        background-color: ${({ theme }) => theme.colors.theme1};
        color: ${({ theme }) => theme.colors.white};
    }
`;

const IPSelect = (props) => {
    const [selected, setSelected] = useState(props.seasons[0].name);
    const [selectedId, setSelectedId] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleSelect = (selectedValue, selectedId) => {
        setSelected(selectedValue);
        setSelectedId(selectedId);
        setToggle(false);

        // Pass the selected value back to the parent component
        if (props.onSelect) {
            props.onSelect([selectedId,selectedValue]);
        }
    };

    return (
        <Select id={props.id}>
            <button
                className='selected d-flex align-items-center justify-content-center'
                onClick={() => { setToggle(!toggle) }}
                data-selected={selectedId}
            >
                <span>{selected}</span>
                <span className='pb-1 ps-2'><FaCaretDown /></span>
            </button>
            <div className={`options ${toggle ? "" : "d-none"}`}>
                <ul>
                    {props.seasons.map((data, index) => (
                        <li
                            key={index}
                            className={`${selected === data.name ? "active" : ""}`}
                            onClick={() => handleSelect(data.name, index)}
                        >
                            {data.name}
                        </li>
                    ))}
                </ul>
            </div>
        </Select>
    );
};

export default IPSelect;