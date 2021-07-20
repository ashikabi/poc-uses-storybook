import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, rounded, label, ...props }) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      rounded={rounded}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
  onClick: undefined,
};