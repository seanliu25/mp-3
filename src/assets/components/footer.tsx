import { STYFOOTER } from './mystyle';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <STYFOOTER>
            <footer>
                <p> All rights reserved by Shangwei Liu <Link to = "/credit">Credit</Link> &#169;</p>
            </footer>
        </STYFOOTER>
    )
}