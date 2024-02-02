import React from "react";
export default function header(props){
    return(
            <header>
                <nav>
                    <ul className="nav-list">
                        <li>{props.title}</li>

                    </ul>
                </nav>
        </header>
    );
}
