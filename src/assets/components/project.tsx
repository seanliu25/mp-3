import {STYMainContent } from "./mystyle";
import Calculator from "./calcu";


 function Project() {
  return (
        <STYMainContent>
            <div>
                <h2>Projects: </h2>
                <ul>
                    <li><strong>Personal Web Financial Data Analytics </strong> - Boston, MA (2023 - 2024)
                        <ul>
                            <li>Developed a web-based application that provides personal budget suggestions based on user data.</li>
                            <li>Ensured security by integrating Open Authorization (OAuth) from Google and Facebook.</li>
                            <li>Implemented an SQLite-based database to manage and secure user data.</li>
                            <li>Applied AI to enhance the accuracy of financial suggestions based on user activity.</li>
                            <li>Used technologies including HTML, JavaScript, Python, and CSS.</li>
                        </ul><br/>
                    </li>
                    <li><strong>Unity Game Project</strong> - Harrisburg, PA (2020 - 2022)
                        <ul>
                            <li>Led the design and implementation of a 2D game using Unity Engine.</li>
                            <li>Collaborated on the design of the code structure, user interface, and 3D model designs.</li>
                            <li>Utilized C#, Maya, and Unity for game development.</li>
                            <li>Deployed the game on Windows systems for smooth gameplay.</li>
                        </ul><br/>
                    </li>
                </ul>
            </div>
            <div>
            <h2> JavaScript Calculator :</h2>
            <Calculator />
            </div>
        </STYMainContent>
  );
}
export default Project;