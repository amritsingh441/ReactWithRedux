import React, {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { ADD_NOTE } from '../../redux/types'; //=> without using actions.js
// import { addNote } from '../../redux/actions'; => when using actions.js

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: '100%',
    marginTop: "10vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  buttonCls: {
      marginTop: '3vh'
  }
}),
);

const AddNote = (props:any) => {
    const classes = useStyles();
const [title,setTitle] = useState('');
const [description,setDescription] = useState('');

const addNoteHandler = () => {
  const dynamicId = Math.random()*1000;
  const newNote = {
    id : dynamicId,
    title,
    description
  }
  //props.addNote(newNote); => when using actions.js
  props.onAddNote(newNote); //=> without using actions.js
}
    return (
        <div className={classes.root}>
        <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="expansionPanel">
        <Typography className={classes.heading}>Take a note...</Typography>
        </ExpansionPanelSummary>
        <FormControl  className={classes.formControl}>
        <TextField  label="Title" onChange={(event:any)=>setTitle(event.target.value)}/>
        </FormControl>
        <br/>
        <FormControl  className={classes.formControl}>
        <TextField  label="Description" onChange={(event:any)=>setDescription(event.target.value)}/>
        </FormControl>
        <br/>
          <Typography>
          <Button  className={classes.buttonCls} 
          color="primary" variant="contained"
          onClick = {addNoteHandler}
          >Add Note</Button>
          </Typography>
          <br/>
      </ExpansionPanel>
      </div>
    )
}

const mapDispatchToProps = (dispatch:any) => {
return {
  onAddNote : (newNote:any) => dispatch ({
    type : ADD_NOTE,
    payload : newNote
  })
}
}

export default connect(null,mapDispatchToProps)(AddNote); //=> without actions.js
//export default connect(null,ADD_NOTE)(AddNote); => when using actions.js