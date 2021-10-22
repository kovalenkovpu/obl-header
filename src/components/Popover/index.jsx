import * as React from 'react';
import classNames from 'classnames';

import classes from './Popover.module.scss';

const Popover = ({ isVisible, setIsExpanded, children }) => {
  const ref = React.useRef(null);

  const onOutsidePopoverClick = (event) => {
    if (event.currentTarget !== ref?.current) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', onOutsidePopoverClick);

    return () => window.removeEventListener(onOutsidePopoverClick);
  }, []);

  return (
    <ul className={classNames(classes.popoverWrapper, { [classes.visible]: isVisible })} ref={ref}>
      {children}
    </ul>
  );
};

export { Popover };