import React, { useState, useEffect } from 'react';
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
    if (event.target.tagName === "LI" && filterSelected.includes(event.target.innerHTML.trim()) !== true) {
      setFilterSelected([...filterSelected, event.target.innerHTML.trim()]);
    }
  }
  const removeFilter = (event) => {
    if (event.target.tagName === "BUTTON") {
      setFilterSelected(filterSelected.filter(index => index !== event.target.parentNode.innerText));
    }
  }
  const removeAllFilter = () => {
    setFilterSelected([]);
  }

  useEffect(() => {
    setJobsData(jobsDataJSON.filter((x) => {
      let checkEvery = (arr, target) => target.every(v => arr.includes(v));
      let checkEveryFilter = checkEvery([...x.tools, ...x.languages, x.level, x.role], filterSelected);
      return checkEveryFilter;
    }));
  }, [filterSelected])

  return (
    <div className="App">
      <Header />
      {
        filterSelected.length > 0 && <FilterBar filterSelected={filterSelected}
          removeFilter={removeFilter}
          removeAllFilter={removeAllFilter} />
      }
      <JobCard jobsData={jobsData} getFilterSelected={getFilterSelected} />
    </div>
  );
}

export default App;
