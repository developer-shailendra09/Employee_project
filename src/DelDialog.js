import Dialog from './Dialog';
import React, { useState } from 'react';

function DelDialog() {
//   const [showTaskDialog, setShowTaskDialog] = useState(false);
//   const [showUserDialog, setShowUserDialog] = useState(false);

//   const confirm = () => {
//     console.log('Confirm');
//     setShowTaskDialog(false);
//   };

//   const confirmUser = () => {
//     console.log('Confirm user');
//     setShowUserDialog(false);
//   };

//   const cancel = () => {
//     setShowTaskDialog(false);
//     setShowUserDialog(false);
//   };

  return (
  <>
    <div className="mt-10 text-center">
      <button className="btn" onClick={() => { setShowTaskDialog(true) }}>Delete Task</button>
      {/* <button className="btn" onClick={() => { setShowUserDialog(true) }}>Delete User</button> */}
    </div>
     <br/>
    <Dialog
      show={showTaskDialog}
      title="Delete ?"
      description="Do you really want to delete this deatils?"
      confirm={confirm}
      cancel={cancel} />

    
  </>
  );
}

export default DelDialog;