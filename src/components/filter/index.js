import React from "react";
import styled from "styled-components";
import remove from "./../../img/icon-remove.svg";

const FilterContainer = styled.ul`
    display : flex;
    flex-wrap : wrap;
    list-style-type : none;
    padding-left : 20px;
    padding-top : 15px;
    margin-top : 0;
    @media (min-width : 600px){
        display : flex;
        flex-wrap: wrap;
        /* text-align: left; */
        margin: 50px 0 auto auto;
        justify-content : start;
        /* overflow : auto; */
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
        margin-top: -15px;
        margin-right: -15px;
        height: 52px;
        width : 40px;
    }
`;



const Filter = () => {
    return (
        <>
            <FilterContainer>
                <FilterSelect>HTML<ButtonDeleteFilter /></FilterSelect>

               

            </FilterContainer>
        </>
    )
}

export default Filter;