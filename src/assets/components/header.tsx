import { STYHEADER } from './mystyle'; // Import the styled component

export default function Header() {
    return (
        <STYHEADER>  {/* Use STYHEADER styled component directly */}
            <h1> Shangwei Liu</h1>
            <p>
                <em>Shangwei Liu's online resume. </em>
                / Boston, MA / Phone number: xxx-xxx-xxxx
            </p>
        </STYHEADER>
    );
}
