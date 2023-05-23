// higher order component hoc just a component that renders a other component
// reuse code
// render hijacking
// prop manupilation
//abstract state
import React from "react";
import  ReactDOM  from "react-dom";

const Info = (props)=>(
    <div>
    <h1>info</h1>
    <p>the info is{ props.info}</p>
    </div>
);
const withadminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
      { props.isAdmin && <p>this private info plz dont share</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => ( 
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>access denied</p>}
        
        </div>
    )
}

const AdminInfo = withadminWarning(Info);
const AuthInfo = requireAuthentication(Info)
//ReactDOM.render(<AdminInfo isAdmin= {true} info=' there are the detail'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated= {false} info=' there are the detail'/>, document.getElementById('app'))