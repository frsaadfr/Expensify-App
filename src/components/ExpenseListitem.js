import React from "react";
import { Link } from "react-router-dom";



// export a state less component
//render description amount created at

const ExpenseListitem = ({ id,description, amount, createdAt}) => {
    return ( 
        <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        {amount} - { createdAt}
       
       
        </div>
        )
}
export default ExpenseListitem;