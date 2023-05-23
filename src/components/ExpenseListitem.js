import React from "react";
// export a state less component
//render description amount created at

const ExpenseListitem = ({ description, amount, createdAt}) => {
    return ( 
        <div>
        <h3>{description}</h3>
        {amount} - { createdAt}
        </div>
        )
}
export default ExpenseListitem;