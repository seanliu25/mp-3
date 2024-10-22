import { Link } from 'react-router-dom';

import {STYNavigationContainer } from "./mystyle";

export default function Navigation() {
    return (
        <STYNavigationContainer>
            <p>Menu: </p>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/project">Projects</Link></li>
                <li> <Link to="/research">Research & Education</Link></li>
                <li> <Link to="/skill">Skills</Link></li>
                <li> <Link to="/achievement">Achievements</Link></li>
                <li> <Link to="/work-experience">Work Experience</Link></li>
            </ul>
        </STYNavigationContainer>
    );
}

