import React from 'react';
import { makeStyles, Chip } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  }));

const ChipUser = ({ status }) => {
    const classes = useStyles();

    const handleDelete = () => {
        return;
    };

    return ( 
        <div className={classes.root}>
            {status ? 
                <Chip
                    variant="outlined"
                    size="small"
                    icon={<FaceIcon />}
                    label={status === "Alive" ? "Live" : "Dead"}
                    clickable
                    color={status === "Alive" ? "primary" : "secondary"}
                    onDelete={handleDelete}
                    deleteIcon={status === "Alive" ? <DoneIcon /> : null }
                /> : null}
        </div>
    );
}
 
export default ChipUser;