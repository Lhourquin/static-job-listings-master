import React from "react";
import styled from "styled-components";
import Filter from "../filter/index";

const Bar = styled.div`
    display: flex;
    /* justify-content: space-; */
    margin: -50px auto auto auto;
    width : 330px;
    background: white;
    -webkit-box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11); 
    box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11);
    border-radius : 9px;
    @media (min-width : 600px){
        margin: -90px auto auto auto;
        width : 70%;
    }
`;
const ClearButton = styled.button`
    align-items: baseline;
    height: 50px;
    margin-right: 20px;
    border: none;
    background: none;
    font-weight: 700;
    color :  hsl(180,29%,50%);
    cursor : pointer;
    
`;
const FilterBar = () => {
    return (
        <>
            <Bar>
                <Filter/>
                <ClearButton>Clear</ClearButton>
            </Bar>
        </>

    )
}

export default FilterBar;