import React from "react";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import {STYContainer, STYBody} from "./assets/components/mystyle"; 

// 1. If I use global style sheet that would cause no problem, however if I use STYBody there will be white space on the side of the screen
// 2. For the calculator do we have to define a JS calculator from scratch and use React route's useState? 
// 3. The main component are not wokring with a attribute called children.  

// Import Header, Footer, and Navigation components
import Header from "./assets/components/header";
import Footer from "./assets/components/footer";
import Navigation from "./assets/components/nav";

// Import your page components
import Index from "./assets/components";
import Project from "./assets/components/project";
import WorkExperience from "./assets/components/work-experience";
import Research from "./assets/components/research";
import Skill from "./assets/components/skill";
import Achievement from "./assets/components/achievement";

const Root = () => {
  return (
    <STYBody>
      {/* <GlobalStyles />  */}
      <Header />
      <STYContainer> {/* Styled container to wrap navigation and content */}
        <Navigation /> {/* Reuse existing Navigation component */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project" element={<Project />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/achievement" element={<Achievement />} />
        </Routes>
      </STYContainer>
      <Footer />
    </STYBody>
  );
};

// Set up the router
const router = createBrowserRouter(
  [{ path: "*", Component: Root }]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
