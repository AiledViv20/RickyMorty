import React, { useState, useEffect } from 'react';
import {
    Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles
} from '@material-ui/core';
import api from '../helpers/api';
import Typography from '@material-ui/core/Typography';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      display: 'flex'
    },
    typography: {
        paddingTop: '5px',
        paddingLeft: '2px'
    }
  });

const ModalEpisode = ({ idSelect, open, handleClose }) => {
    const classes = useStyles();
    const[episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get(`/character/${idSelect}`)
                const information = data.episode;
                const values = information.map((item, idx) => {
                    let str = item;
                    let res = str.split("/");
                    res = parseInt(res[5])
                    return {
                        episode: res,
                        key: idx
                    }
                })
                setEpisodes(values);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [idSelect]);

    return ( 
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Capítulos en donde aparece"}</DialogTitle>
                <DialogContent>
                    {episodes ?
                        episodes.map((item, idx) => {
                            return (
                                <div className={classes.root} key={idx}>
                                    <NaturePeopleOutlinedIcon color="primary"/>
                                    <Typography className={classes.typography} variant="body2" display="block" gutterBottom>
                                        {`Episodio ${item.episode}`}
                                    </Typography>
                                </div>
                            )
                        }) 
                        : null
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
 
export default ModalEpisode;