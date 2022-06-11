import React from "react";

const JobCard = ({jobsData}) => {
    return(
        <div>
            {
                jobsData.map(obj => <div key={obj.id}>
                   <img src={obj.logo} alt={obj.company + " logo"}/>

                    <h4>{obj.company} {obj.new == true ? "new" : ""} {obj.featured == true ? "featured" : ""}</h4>
                    <h5>{obj.position}</h5>
                    <ul>
                        <li>{obj.postedAt}</li>
                        <li>{obj.contract}</li>
                        <li>{obj.location}</li>
                    </ul>
                    <ul>
                        {
                           obj.languages.map((langage, id)=> <li key={id}>
                            {langage}
                           </li>)
                          
                        }
                        {
                             obj?.tools.map((tool, id)=> <li key={id}>
                             {tool}
                            </li>)
                        }
                        <li>{obj.level}</li>
                    </ul>
                </div>)
            }
        </div>
    )
}
export default JobCard;