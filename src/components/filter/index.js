import React from "react";
import styled from "styled-components";
import remove from "./../../img/icon-remove.svg";

const FilterContainer = styled.ul`
    width : 90%;
    display : flex;
    flex-wrap : wrap;
    list-style-type : none;
    padding-left : 20px;
    padding-top : 15px;
    margin-top : 0;
    margin-bottom: 0;
    @media (min-width : 600px){
        display : flex;
        flex-wrap: wrap;
        justify-content : start;
        li{
            padding :15px;
            display : flex;
            justify-content: center;
            
        }
    }
`;

const FilterSelect = styled.li`
    display : flex;
    justify-content: space-between;
    background-color: hsl(180, 52%, 96%);
    color :  hsl(180,29%,50%);
    font-weight : 700;
    margin-right: 15px;
    margin-bottom : 15px;
    border-radius: 9px;
    height : 22px;
    display : flex;
    padding : 6px;
    cursor : pointer;
    @media (min-width : 600px){
        height: 6px;
        align-items: center;
    }

`;

const ButtonDeleteFilter = styled.button`
    border: none;
    background-image : url(${remove});
    background-repeat: no-repeat;
    background-color: hsl(180,29%,50%);
    background-position: center;
    height: 33px;
    margin-top: -5px;
    margin-left: 6px;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    width: 30px;
    cursor: pointer;
    margin-right: -5px;
    @media (min-width : 600px){
        margin-top: -1px;
        margin-right: -15px;
        height: 35px;
        width : 40px;
    }
`;



const Filter = () => {
    return (
        <>
            <FilterContainer>
                <FilterSelect>HTML<ButtonDeleteFilter /></FilterSelect>
                {/* <FilterSelect>CSS<ButtonDeleteFilter /></FilterSelect>
                <FilterSelect>JS<ButtonDeleteFilter /></FilterSelect>
                <FilterSelect>JUNIOR<ButtonDeleteFilter /></FilterSelect>
                
                */}

            </FilterContainer>
        </>
    )
}

export default Filter;