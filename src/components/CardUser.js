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
      maxWidth: '100%',
      width: '66%',
      marginBottom: '20px'
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
          title={name ? name : ""}
          subheader={gender ? `${gender === "Male" ? "Hombre" : "Mujer"}` : ""}
        />
        <CardMedia
          className={classes.media}
          image={image ? image : null}
          title={name ? name : null}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {`${origin ? `Origen: ${origin}` : ""}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
          {`${type ? `Tipo: ${type}` : ""}`}
          </Typography>
        </CardContent>
      </Card>
    );
}
 
export default CardUser;