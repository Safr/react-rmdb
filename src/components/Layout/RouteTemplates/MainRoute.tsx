import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
// COMPONENTS
import { ErrorScreen, LoadingScreen } from 'components/Layout/Screens';
import { MainLayout } from 'components/Layout/Layouts';

// // TYPES
type Props = {
  component: React.ComponentType<any>;
  rest?: Object;
};

const MainTemplate: React.FC<Props & RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <ErrorScreen>
          <MainLayout {...rest}>
            <Component {...props} fallback={<LoadingScreen {...props} {...rest} />} />
          </MainLayout>
        </ErrorScreen>
      )}
    />
  );
};

export default MainTemplate;