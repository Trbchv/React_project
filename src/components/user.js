import React from "react";
export default function User(props){
    return(
                <div className="card" >
                    <h3>{props.user.name} {props.user.lastname} {props.user.isHappy ? ':)' : ':('}</h3>
                    <p>{props.user.bio}</p>
                </div>
    );
}
