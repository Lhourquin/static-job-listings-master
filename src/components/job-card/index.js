import React from "react";
import styled from "styled-components";

const ContainerJobCard = styled.div`
@media (max-width : 375px){
    margin-top: 100px;
    }
`;
const Card = styled.div`
    background-color: white;
    width : 330px;
    border-left : 8px solid hsl(180, 29%, 50%);
    border-radius : 9px;
    border-top-left-radius: 9px 10px;
    border-bottom-left-radius: 9px 10px;
    margin : 70px auto 55px auto;
    -webkit-box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11); 
    box-shadow: 5px 7px 27px 5px rgba(0,0,0,0.11);
    .logo{
        width: 60px;
        margin-left : -220px;
        margin-top : -30px;
        text-align: left;
    }
    .company{
        color : hsl(180, 29%, 50%);
        padding-left : 20px;
        text-align : left;
        
    }
    .position{
        text-align: left;
        padding-left : 20px;
    }
    .postedContactLocation{
        display : flex;
        padding-left : 20px;
        list-style-type : none;
        color : hsl(180, 8%, 52%);
        li{
            font-weight : 600;
        }
        li:nth-child(2), li:nth-child(3){
            padding-left :10px;
        }
    }
    hr{
        margin-left: 20px;
        width : 275px;
        color : black;
        border : 1px solid;
    }

`;
const Recent = styled.span`
    background-color : ${props => props.bgColor};
    margin-left : ${props => props.marginLeft ? props.marginLeft : ""};        
    color : white;
    border-radius : 20px;
    padding : 6px;
`;
const FilterLanguagesAndLevel = styled.ul`
    display : flex;
    flex-wrap : wrap;
    list-style-type : none;
    padding-left : 20px;
    li{
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

    }
`;
const JobCard = ({ jobsData }) => {
    return (
        <>
            <ContainerJobCard>
                {
                    jobsData.map(obj =>
                        <Card key={obj.id}>
                            <img className="logo" src={obj.logo} alt={obj.company + " logo"} />
                            <h4 className="company">{obj.company} {obj.new === true ? <Recent marginLeft={"20px"} bgColor={"hsl(180, 29%, 50%)"}>NEW!</Recent> : ""} {obj.featured === true ? <Recent marginLeft={"5px"} bgColor={"hsl(180, 14%, 20%)"}>FEATURED</Recent>: ""}</h4>
                            <h5 className="position">{obj.position}</h5>
                            <ul className="postedContactLocation">
                                <li>{obj.postedAt}</li>
                                <li>• {obj.contract}</li>
                                <li>• {obj.location}</li>
                            </ul>
                            <hr/>
                            <FilterLanguagesAndLevel>
                                <li>{obj.role}</li>
                                <li>{obj.level}</li>

                                {
                                    obj.languages.map((langage, id) => <li key={id}>
                                        {langage}
                                    </li>)

                                }
                                {
                                    obj?.tools.map((tool, id) => <li key={id}>
                                        {tool}
                                    </li>)
                                }
                            </FilterLanguagesAndLevel>
                        </Card>)
                }
            </ContainerJobCard>
        </>
    )
}
export default JobCard;