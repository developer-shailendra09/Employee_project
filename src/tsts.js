import { useState, useRef } from "react";
import "./styles.css";
import Dialog from "./Dialog";

function tsts() {

    const handleDelete = (id) => {
        //Update
        const index = data.findIndex((p) => p.id === id);
    
        handleDialog("Are you sure you want to delete?", true, data[index].name);
        idProductRef.current = id;
      };
    
    const areUSureDelete = (choose) => {
        if (choose) {
          setProducts(products.filter((p) => p.id !== idProductRef.current));
          handleDialog("", false);
        } else {
          handleDialog("", false);
        }
     };    

     return(
         <>
     <button
            onClick={() => handleDelete(p.id)}>
            Delete
          </button>
          </>
     )

     {dialog.isLoading && (
        <Dialog
          //Update
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}

     }

     export default tsts;