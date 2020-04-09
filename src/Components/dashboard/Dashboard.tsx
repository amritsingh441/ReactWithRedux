import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddNote from '../addnote/AddNote';
import Card from '../card/NoteCard';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { GET_NOTES } from '../../redux/types'; // => without use of action.js code
//import { getNotes } from '../../redux/actions'; => using actions.js file method mapping

const Dashboard = (props:any) => {
      return (
            <Grid container direction = "column" alignItems="center" justify="space-evenly">
            <Container maxWidth="lg" >
                  <Typography id = "dashBoardHeading" component="div" variant="h6" align="center" gutterBottom>
                  <br/>
                  <AddNote/>
                  <br/>
                  <Grid item sm={12} container direction = "row" alignItems="center" justify="space-evenly">
                 { props.dasboardNotes.map((note:any)=> <Card key={note.id} id={note.id} title={note.title} desc={note.description}/>)}
                  </Grid>
                  </Typography>
            </Container>
             </Grid>
            )
}
const mapStateToProps = (state: any) => ({
      dasboardNotes: state.notes
  });

  //need to add below code if not using action.js file action creator mapping
  // if using action.js file then no need of "mapDispatchToProps" code
  const mapDispatchToProps = (dispatch: any) => {
        return {
            onGetNotes : () => dispatch({
                  type: GET_NOTES
            })

            }
        }
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);   // => without using action.js      
//export default connect(mapStateToProps, { getNotes })(Dashboard); with use of action.js