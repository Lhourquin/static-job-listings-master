import React from 'react';
import './App.css';
import jobsData from "./data.json";
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

  console.log(jobsData)

  return (
    <div className="App">
      <Header/>
      <FilterBar/>
      <JobCard jobsData={jobsData}/>
    </div>
  );
}

export default App;
