import * as React from 'react';

import { MainNavItem } from '../MainNavItem';
import { SubNavItem } from '../SubNavItem';

import classes from './Header.module.scss';

const Header = ({ config }) => {
  return (
    <section>
      <ul className={classes.mainNav}>
        {
          config.MAIN_NAV?.map(mainNavItem => (
            <MainNavItem key={mainNavItem.id} config={mainNavItem} />
          ))
        }
      </ul>
      <ul className={classes.subNav}>
        {
          config.SUB_NAV?.map(subNavItem => (
            <SubNavItem key={subNavItem.id} config={subNavItem} />
          ))
        }
      </ul>
    </section>
  );
};

export { Header };