import React from "react";
import styled from "styled-components";
import Filter from "../filter/index";

const Bar = styled.div`
    margin: -50px auto auto auto;
    width : 330px;
    background: white;
    -webkit-box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11); 
    box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11);
    border-radius : 9px;
`;

const FilterBar = () => {
    return (
        <>
            <Bar>
                <Filter/>
            </Bar>
        </>

    )
}

export default FilterBar;