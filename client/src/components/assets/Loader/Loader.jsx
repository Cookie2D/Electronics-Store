import React from 'react';
import {CircularProgress} from "@material-ui/core";
import PropTypes from 'prop-types';

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

Loader.propTypes = {
    loaded: PropTypes.bool.isRequired,
}

export default Loader;