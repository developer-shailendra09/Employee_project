import React from 'react';
import './dialog.css';

 function Dialog({ show, title, description, confirm, cancel,onDialog }) {

    return (
        <>
        <div className="col-md-4 offset-md-4">
            <div className="dialog">
            <br/>
                <div className="dialog__content">
                    <h2>{title}</h2>
                    <p className="dialog__description">{description}</p>
                </div>
                
                <hr />
                
                    <button className="btn btn-sm" onClick={cancel} >Cancel</button> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light" onClick={confirm} >Yes</button>
                
  
            </div>
            <br/>
        </div><br/>
        </>
    )
}

export default Dialog;