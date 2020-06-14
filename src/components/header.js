import React from 'react';
import {Link} from 'react-router-dom'
const Header = ({name, contactEmail})=>{
    return(
        <div>
            <div className="header_container">
                <Link to="/"><h1>{name}.</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/about">hakkimda</Link></li>
                        <li><a href={`mailto:${contactEmail}`}>iletisim</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header