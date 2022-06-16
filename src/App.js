import React, {useState} from 'react';
import './App.css';
import jobsDataJSON from "./data.json";
import styled from "styled-components";
import bgMobile from "./img/bg-header-mobile.svg";
import bgDesktop from "./img/bg-header-desktop.svg";
import JobCard from "./components/job-card/index";
import FilterBar from './components/filter-bar/index';

const Header = styled.header`
    background-image : url(${bgMobile}); 
    height: 156px;
    background-color: hsl(180,29%,50%);
    @media (min-width : 375px){
      background-image : url(${bgDesktop}); 
      background-color:   hsl(180,29%,50%);
    
    }

`;

function App() {

  const [jobsData, setJobsData] = useState(jobsDataJSON);
  const [filterSelected, setFilterSelected] = useState([]);

  const getFilterSelected = (event) => {
    if(event.target.tagName == "LI" && filterSelected.includes(event.target.innerHTML) != true){
      setFilterSelected([...filterSelected, event.target.innerHTML.trim()]);
    }
  }
  const removeFilter = (event)=> {
    if(event.target.tagName == "BUTTON"){
      setFilterSelected(filterSelected.filter(index => index != event.target.parentNode.innerText));
    }
  }
  const removeAllFilter = (event)=> {
    setFilterSelected([]);
  }
  
  console.log(filterSelected)
  return (
    <div className="App">
      <Header/>
      {
       filterSelected.length > 0 && <FilterBar filterSelected={filterSelected} 
                                               removeFilter={removeFilter}
                                               removeAllFilter={removeAllFilter}/>
        }
      <JobCard jobsData={jobsData} getFilterSelected={getFilterSelected} />
    </div>
  );
}

export default App;
