import * as React from 'react';
// HOOKS
import { useSidebar, usePrevious, useSetGlobalEventHandler } from 'lib/hooks';
import { Location } from 'history';

const { useEffect } = React;

interface InjectedProps {
  location: Location;
}

// EXPORTED HOC
const withSidebar = <P extends InjectedProps>(
  Component: React.ComponentType<P>,
): React.FC<P & InjectedProps> => props => {
  const { location } = props;
  const prevLocation = usePrevious(location.pathname);
  const sidebarProps = useSidebar();

  const onEscKeyPressed = e => {
    if (e.keyCode === 27) {
      if (sidebarProps.isSidebarOpen) sidebarProps.closeSidebar();
      return null;
    }
    return null;
  };

  useSetGlobalEventHandler(
    window,
    'keydown',
    onEscKeyPressed,
    sidebarProps.isSidebarOpen,
  );

  useEffect(() => {
    if (prevLocation && prevLocation !== location.pathname) {
      sidebarProps.closeSidebar();
    }
    // eslint-disable-next-line
  }, [location.pathname]);
  return <Component {...props} sidebarProps={sidebarProps} />;
};

export default withSidebar;
