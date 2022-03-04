import React from 'react';
import {Dialog, DialogTitle, DialogContent, AccordionActions,Button, Typography} from '@material-ui/core'

function ConfirmDialog(props){
   
    let {confirmDialog , setConfirmDialog } = props;
    return(
        <Dialog open={ConfirmDialog.isOpen}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                   <Typography variant="<h6>">{ConfirmDialog.title}</Typography>
                   <Typography variant="Subtitle2">{ConfirmDialog.subTitle}</Typography>
            </DialogContent>
            <AccordionActions>
                      <Button>Yes</Button>
                      <Button>No</Button>
            </AccordionActions>
        </Dialog>
    )
}

export default ConfirmDialog;