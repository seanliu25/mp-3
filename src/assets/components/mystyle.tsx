import styled from 'styled-components';


export const STYBody = styled.div`
  font-family: Arial, sans-serif;
  background-color: #1e1e1e;
  color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const STYHEADER = styled.header`
    text-align: left; /* Align left for larger screens */
    background-color: #222;
    color: white;
    padding: 20px;

  @media screen and (max-width: 750px) {
    padding: 15px;
    text-align: center;
    font-size: calc(10px + 1vw);
  }
`;

// Container component to wrap navigation and content
export const STYContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: auto;
  
  @media screen and (max-width: 750px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;

// Navigation container styles
export const STYNavigationContainer = styled.nav`
  width: 30%;
  padding: 20px;
  background-color: #333;
  height: 100vh;

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin: 10px 0;
    padding: 10px;
    background-color: #555;
    word-wrap: break-word;
  }

  ul li a {
    text-decoration: none;
    color: white;
    display: block;
    text-align: left;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    padding: 10px;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    ul li {
      margin: 8px;
      flex: 1;
    }
  }
`;

export const STYMainContent = styled.main`
  flex: 1;
  padding: 20px;
  width: 70%;
  background-color: #222;
  color: white;
  max-height: auto;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 10px;
    text-align: center;
    max-height: auto;
  }
`;

export const STYImage = styled.img`
  width: 300px;
  height: auto;
`;

export const STYFOOTER = styled.footer`
  width: 100%;
  background-color: #222;
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
  bottom: 0;

  @media screen and (max-width: 750px) {
    width: 100%;
    bottom: 0;
  }
`;

export const STYCalcu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d2d2d;
  padding: 40px;
  max-width: 300px; 
  width: 100%;
  border-radius: 10px; 

  label, input, button, h3 {
    font-size: calc(10px + 0.5vw);
    margin: 10px 0; 
    width: 100%; 
    text-align: center;
  }

  input {
    padding: 10px;
    background-color: #444;
    border: none;
    border-radius: 5px;
    color: white;
    width: 90%;
  }

  button {
    background-color: #444;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    width: 90%; 
  }

  h3 {
    margin-top: 20px; 
    font-weight: bold;
  }

  @media screen and (max-width: 750px) {
    padding: 20px;
    
    button 
    {
      padding: 10px 16px;
    }
  }
`;


