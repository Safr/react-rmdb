import * as React from 'react';
import { throttle } from 'lib/helpers';

type WithAjaxLoadMoreProps<T> = T & withAjaxLoadMoreInnerProps;

type withAjaxLoadMoreInnerProps = {};

type WithAjaxLoadMoreState = {
  currentPage: number;
};

function withAjaxLoadMore<T>(
  WrappedComponent:
    | React.ComponentClass<WithAjaxLoadMoreProps<T>, {}>
    | React.FunctionComponent<WithAjaxLoadMoreProps<T>>,
): React.ComponentClass<T> {
  class WithAjaxLoadMore extends React.Component<T, WithAjaxLoadMoreState> {
    displayName = `WithAjaxLoadMore(${WrappedComponent.displayName})`;

    state = {
      currentPage: 1,
    };

    handleScroll = throttle(() => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight + 200) >= scrollHeight;
      if (scrolledToBottom) {
        this.setPage();
      }
    }, 500);

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    setPage = () => {
      const { currentPage } = this.state;
      this.setState({ currentPage: currentPage + 1 });
    };

    render() {
      const { currentPage } = this.state;
      return <WrappedComponent {...this.props} page={currentPage} />;
    }
  }
  return WithAjaxLoadMore;
}

export default withAjaxLoadMore;
