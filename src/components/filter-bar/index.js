import React from "react";
import styled from "styled-components";
import Filter from "./filter/index";

const Bar = styled.div`
    display: flex;
    margin: -30px auto auto auto;
    width : 330px;
    background: white;
    -webkit-box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11); 
    box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11);
    border-radius : 9px;
    @media (min-width : 600px){
        margin: -35px auto auto auto; 
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
    padding-top: 10px;
    @media (min-width :600px){
        padding-top: 20px;
    }
`;

const FilterBar = ({filterSelected, removeFilter, removeAllFilter}) => {
    return (
        <>
            <Bar>
                <Filter filterSelected={filterSelected} removeFilter={removeFilter}/>
                <ClearButton onClick={removeAllFilter}>Clear</ClearButton>
            </Bar>
        </>

    )
}

export default FilterBar;