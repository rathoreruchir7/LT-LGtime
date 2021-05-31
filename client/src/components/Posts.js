import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import PostDetail from './PostDetail'
import { fetchPosts } from '../redux/ActionCreators';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
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
        alignItems: "center",
        paddingLeft: "20px",
        
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


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  function Posts(props){

    const classes = useStyles()
    const [spinner, setSpinner] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(async() => {
        const result = await props.fetchPosts()
        if(result.data){
            console.log(result.data)
            setPosts(result.data)
            setSpinner(false)
        }
    },[])
    
    const list = posts.map((item) => {
        <PostDetail item={item} />
    })
    return (
        <div>
        <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
      <div style={{height: '100vh', width: '600px', margin: "auto", overflow: 'hidden'}}>
            {list}
      </div>  
      </div>
    );
  }

const mapStateToProps = state => {
    return {
        auth: state.auth,
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
   
    fetchPosts: () => dispatch((fetchPosts())),
   
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))