import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { set } from 'mongoose';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { logoutUser, getProfile, uploadProfile, updateProfile } from '../redux/ActionCreators';
import { DialogContentText, ListItemAvatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '100px',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: theme.spacing(50),
            height: theme.spacing(40),
        },
    },

    loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
      
    paper: {
        display: "flex",
        height: 'auto',
        minHeight: '200px',
        width: '500px',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "flex-start",
        paddingLeft: "20px",
        paddingTop: '20px',
        paddingBottom: '50px',

        
    },

    field: {
        marginTop: '20px',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: "center",
    },

 

    inputStyle: {
        // fontWeight: 'bold'
    }
}));


function PostDetail(props){
    const classes = useStyles()
    console.log(props)
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <div style={{marginBottom: '20px'}}>{props.item.userName}</div>
            <div style={{marginBottom: '20px'}}>{props.item.location}</div>
            <img src={props.item.image} style={{width: '80%', height: '80%', marginBottom: '20px'}}></img>
            <div style={{marginBottom: '20px'}}>{props.item.text}</div>
            <div>
                <span style={{marginRight: '20px'}}><FavoriteBorderIcon /></span>
                <span><ChatBubbleOutlineIcon /></span>
            </div>
        </Paper>
        </div>
    );
}

export default PostDetail