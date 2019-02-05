import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "styled-system";

// css helper function
const css = key => props => props.theme[key];

// Get our styled component based on theme's "link"
const A = styled.a([], color, css("link"), css("a"));

A.propTypes = {
  ...color.propTypes
};

A.defaultProps = {
  color: "link"
};

// Compose it with our functional component
const Link = ({ children, email }) => (
  <A href={`mailto:${email}`}>
    {children} ({email})
  </A>
);

Link.propTypes = {
  children: PropTypes.string,
  email: PropTypes.string.isRequired
};

Link.defaultProps = {
  children: ""
};

// Export it
export default Link;
