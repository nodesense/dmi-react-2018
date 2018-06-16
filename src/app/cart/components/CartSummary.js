import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class CartSummary extends React.Component {
    constructor(props) {
        super(props)
    }

    // update cycle
    // when it is called
    // on update cycle, when parent render called
    componentWillReceiveProps(nextProps) {
        console.log("Cart summary will receive")
        console.log("Next props ", nextProps)
        console.log("Current props ", this.props)

        // this.props.amount != ....
    }

    // update cycle
    // called when? on every parent render on update cycle
    // called when? this.setState
    // NOT (on forceUpdate, shouldComponentUpdate not called)
    shouldComponentUpdate(nextProps, nextState) {
        console.log("summary should update")
        
        return nextProps.count != this.props.count ||
               nextProps.amount != this.props.amount 
               
        // return true; // calls render
        // return false; // no render call
    }
  
    render() {
        console.log("CartSummary Render ");
        return (
            <div className={this.props.classes.root}>
                <h2>Cart Summary</h2>
  
                
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                    <Paper className={this.props.classes.paper}>Amount: {this.props.amount} </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={this.props.classes.paper}>Total Items: {this.props.count}</Paper>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(CartSummary);
