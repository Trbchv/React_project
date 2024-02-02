import React, {useState} from "react";
import User from "./user";
export default function  users(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users,setUsers]= useState([
        {
            id:1,
            name:"Bill",
            lastname:"Bilbo",
            bio:"lorem borem morem lirem purem",
            age:21,
            isHappy:true
        },
        {
            id:2,
            name:"Bobby",
            lastname:"Bilda",
            bio:"lorem borem morem lirem purem",
            age:32,
            isHappy:false
        }
    ]);
    if (users.length > 0){
        return(
            <div className="card-wrapper">
            <>
                {users.map((el) => (
                    <User key={el.id} user={el}/>
                ))}
            </>
            </div>
        );
    }
    else {
        return (
            <div className="card">У вас нет пользователей</div>
        )
    }
}