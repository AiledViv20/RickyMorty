import React, { Fragment, useState } from 'react';
import {
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    Typography
} from '@material-ui/core';
import ChipUser from './ChipUser';
import ModalEpisode from './ModalEpisode';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      width: '66%',
      marginBottom: '20px',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    space: {
      paddingLeft: '5px'
    }
}));

const CardUser = ({ id, name, gender, origin, type, image, color, status }) => {
    const classes = useStyles();
    const[idSelect, setIdSelect] = useState(null);

    const firstLetter = () => {
      return name.charAt(0);
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setIdSelect(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
      <Fragment>
        <Card id={id} className={classes.root} onClick={() => handleClickOpen(id)}>
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
            <ChipUser status={status}/>
            <Typography variant="body2" color="textSecondary" gutterBottom className={classes.space}>
              {`${origin ? `Origen: ${origin}` : ""}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom className={classes.space}>
            {`${type ? `Tipo: ${type}` : ""}`}
            </Typography>
          </CardContent>
        </Card>
        {open ?
          <ModalEpisode 
            idSelect={idSelect}
            open={open}
            handleClose={handleClose}/> : null}
      </Fragment>
    );
}
 
export default CardUser;