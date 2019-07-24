import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

import './styles.sass';

const Link = ({ active, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn('filter_item', { active })}
    >
      {children}
    </div>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;