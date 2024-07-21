import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonClass, onClick, textValue, isIcon }) => {
    return (
        <button className={buttonClass} onClick={onClick}>
            {isIcon && <i className={isIcon}></i>}
            {textValue && textValue}
        </button>
    );
}

Button.propTypes = {
    buttonClass: PropTypes.string,
    onClick: PropTypes.func,
    textValue: PropTypes.string,
    isIcon: PropTypes.string,
};

Button.defaultProps = {
    buttonClass: '',
    onClick: () => {},
    textValue: '',
    isIcon: '',
};

export default Button;
