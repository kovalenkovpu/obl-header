import * as React from 'react';
import classNames from 'classnames';

import classes from './SubNavItem.module.scss';

const SubNavItem = ({ config }) => {
  const { link, iconLink, title, selected } = config;
  const isSelected = { [classes.selected]: selected };

  return (
    <li className={classNames(classes.subNavItem, isSelected)}>
      <a href={link} className={classes.subNavItemLink}>
        {iconLink && <img src={iconLink} className={classes.subNavItemIconImg} />}
        {title && <p className={classes.subNavItemText}>{title}</p>}
      </a>
    </li>
  );
};

export { SubNavItem };