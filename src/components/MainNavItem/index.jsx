import * as React from 'react';
import classNames from 'classnames';

import { Popover } from '../Popover';

import classes from './MainNavItem.module.scss';

const MainNavItem = ({ config }) => {
  const { link, iconLink, title, hasParent, selected, children } = config;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const ref = React.useRef(null);
  const onExpandToggle = (event) => {
    if (event.currentTarget === ref?.current) {
      setIsExpanded(!isExpanded);

      event.stopPropagation();
    }
  };

  const Children = React.useMemo(() => {
    if (!children) {
      return null;
    }

    return (
      <Popover isVisible={isExpanded} setIsExpanded={setIsExpanded}>
        {children.map(
          childMainNavItem => (
            <MainNavItem key={childMainNavItem.id} config={childMainNavItem}/>
          )
        )}
      </Popover>
    );
  }, [isExpanded, children]);

  const isInnerItem = { [classes.innerItem]: hasParent };
  const isSelected = { [classes.selected]: selected };

  return (
    <li className={classNames(classes.mainNavItem, isInnerItem, isSelected)} onClick={onExpandToggle} ref={ref}>
      <a href={link} className={classNames(classes.mainNavItemLink, isInnerItem)}>
        {iconLink && <img src={iconLink} className={classes.mainNavItemIconImg} />}
        {title && <p className={classNames(classes.mainNavItemText, isInnerItem)}>{title}</p>}
      </a>
      {Children}
    </li>
  );
};

export { MainNavItem };