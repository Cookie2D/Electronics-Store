import React from 'react';
import {CircularProgress} from "@material-ui/core";

const Loader = (props) => {
  return (
    <div>
      {props.loaded
        ? props.children
        : <CircularProgress/>
      }
    </div>
  );
};

export default Loader;