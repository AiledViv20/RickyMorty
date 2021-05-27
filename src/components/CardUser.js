import React from 'react';
import {
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: '#000000',
    },
}));

const CardUser = () => {
    return ( 
        <h1>Card</h1>
    );
}
 
export default CardUser;