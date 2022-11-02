import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles, AppBar } from '@material-ui/core';

import { SocketContext } from './Context';
import Sidebar from './Sidebar';
import Notification from './Notification';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        // <Grid container className={classes.gridContainer}>
        //     {stream && (
        //         <Paper className={classes.paper}>
        //             <Grid item xs={12} md={6}>
        //                 <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
        //                 <video playsInline ref={myVideo} autoPlay className={classes.video} />
        //             </Grid>
        //         </Paper>
        //     )}
        //     {callAccepted && !callEnded && (
        //         <Paper className={classes.paper}>
        //             <Grid item xs={12} md={6}>
        //                 <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
        //                 <video playsInline ref={userVideo} autoPlay className={classes.video} />
        //             </Grid>
        //         </Paper>
        //     )}
        // </Grid>
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Sidebar>
                <Notification />
            </Sidebar>
        </div>
    );
};

export default VideoPlayer;