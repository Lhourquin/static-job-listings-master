import React from "react";
import styled from "styled-components";


const ContainerJobCard = styled.div`
// @media (max-width : 600px){
//     margin-top: 100px;
//     }
`;
const Card = styled.div`
    background-color: white;
    width : 330px;
    border-left : ${props => props.borderColor};
    border-radius : 9px;
    border-top-left-radius: ${props => props.borderRadiusLeft};
    border-bottom-left-radius: ${props => props.borderRadiusLeft};
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
        display: flex;
        align-items: center;
    }
    .position{
        text-align: left;
        padding-left : 20px;
    }
    .postedContractLocation{
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
        color : hsl(180, 8%, 52%);
        border : 1px solid;
    }

    @media (min-width : 600px){
        margin: 70px auto 30px auto;
        padding : 0;
        width : 70%;
        height : 140px;
        display : flex;
        .logo{
            margin :auto 15px auto 30px;
            width : 80px;
            height : 80px;
        }
       
        .container__company-position-postedContractLocation{
            display : flex;
            flex-direction: column;
            justify-content: center;
            .company{
               display : flex;
               margin : 0;
               padding : 0;
           }
           .position{
               font-size: 15px;
               margin: 0;
               padding: 0;
           }
           .postedContractLocation{
               li:nth-child(2),
               li:nth-child(3){
                padding-left : 15px;
               }
               margin : 0;
               padding : 0;
               
           }
        }
        hr{
            border: none;
            width : 0;
            margin : 0;
        }

            
        
    }
`;
const Recent = styled.span`
    background-color : ${props => props.bgColor};
    margin-left : ${props => props.marginLeft ? props.marginLeft : ""};        
    color : white;
    border-radius : 20px;
    padding : 5px;
    @media (min-width : 600px){
        padding : 5px;
        margin-top : -4px;
    }
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

    @media (min-width : 600px){
        display : flex;
        flex-wrap: nowrap;
        margin: 50px 0 auto auto;
        justify-content : center;
        overflow : auto;
        li{
            display : flex;
            justify-content: center;
          
        }
    }
`;


const JobCard = ({ jobsData, getFilterSelected }) => {

    return (
        <>
            <ContainerJobCard>
                {
                    jobsData.map(obj =>
                        <Card key={obj.id} borderColor={obj.featured === true ? "8px solid hsl(180, 29%, 50%)" : ""} borderRadiusLeft={obj.featured === true ? "9px 10px" : ""}>
                            <img className="logo" src={obj.logo} alt={obj.company + " logo"} />
                            <div className="container__company-position-postedContractLocation">
                                <h4 className="company">{obj.company} {obj.new === true ? <Recent marginLeft={"15px"} bgColor={"hsl(180, 29%, 50%)"}>NEW!</Recent> : ""} {obj.featured === true ? <Recent marginLeft={"8px"} bgColor={"hsl(180, 14%, 20%)"}>FEATURED</Recent> : ""}</h4>
                                <h5 className="position">{obj.position}</h5>
                                <ul className="postedContractLocation">
                                    <li>{obj.postedAt}</li>
                                    <li> • {obj.contract}</li>
                                    <li> • {obj.location}</li>
                                </ul>
                            </div>
                            <hr />
                            <FilterLanguagesAndLevel onClick={(e)=>  getFilterSelected(e)}>
                                <li >{obj.role}</li>
                                <li> {obj.level}</li>

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