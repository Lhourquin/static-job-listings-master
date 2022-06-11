import React from 'react';
import './App.css';
import jobsData from "./data.json";
import styled from "styled-components";
import bgMobile from "./img/bg-header-mobile.svg";
import JobCard from "./components/job-card/index";

const Header = styled.header`
    background-image : url(${bgMobile}); 
    height: 156px;

`;
function App() {

  console.log(jobsData)

  return (
    <div className="App">
      <Header/>
      <JobCard jobsData={jobsData}/>
    </div>
  );
}

export default App;
