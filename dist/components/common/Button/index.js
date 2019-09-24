import PropTypes from 'prop-types';
import React from "react";
import { Button } from 'antd';
import styles from "./index.module.scss";
import classNames from "classnames";

const ButtonCustom = props => {
  const {
    type,
    children,
    htmlType,
    className,
    onClick,
    disabled
  } = props;
  return React.createElement(Button, {
    type: type,
    htmlType: htmlType,
    className: classNames(styles[`button`], styles[`button--${type}`], className),
    onClick: onClick,
    disabled: disabled
  }, children);
};

export default ButtonCustom;
ButtonCustom.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  htmlType: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};