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

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,

    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
}));

const CardUser = ({ name, gender, origin, type, image, color }) => {
    const classes = useStyles();

    const firstLetter = () => {
      return name.charAt(0);
    }

    return ( 
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ backgroundColor: color }}>
              {firstLetter()}
            </Avatar>
          }
          title={name ? name : null}
          subheader={gender ? gender : null}
        />
        <CardMedia
          className={classes.media}
          image={image ? image : null}
          title={name ? name : null}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
}
 
export default CardUser;