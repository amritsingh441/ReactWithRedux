import React from 'react';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
// import { deleteNote } from '../../redux/actions';
import { connect } from 'react-redux';
import { DELETE_NOTE } from '../../redux/types';

const NoteCard = (props:any) =>  { 
    const deleteNoteHandler =  (id:any) => {
       // props.deleteNote(id);
       props.onDeleteNote(id);
        }  
        return ( <Grid item sm={3} container direction = "row" alignItems="center" justify="space-evenly">
                <Card style={{marginTop:"10px",width:"50%",marginRight:"5px"}}>
            <CardContent>
                <ClearIcon color="secondary" style={{float:"right",cursor:"pointer"}} onClick={() => deleteNoteHandler(props.id)}></ClearIcon>
                <Typography variant="body2" component="p">
                {props.title}
                </Typography>
                <Typography  variant="body2" component="p">
                {props.desc}
                </Typography>
                <br/>
            </CardContent>
            <br/>
        </Card>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onDeleteNote : (id:number) => dispatch({
            type : DELETE_NOTE,
            payload : id
        })
    }
}

export default connect(null,mapDispatchToProps)(NoteCard);
//export default connect(null,{deleteNote})(NoteCard);