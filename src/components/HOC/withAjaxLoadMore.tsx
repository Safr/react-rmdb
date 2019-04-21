import * as React from 'react';

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

    handleScroll = () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if (scrolledToBottom) {
        this.setPage();
      }
    };

    render() {
      const { currentPage } = this.state;
      return <WrappedComponent {...this.props} page={currentPage} />;
    }
  }
  return WithAjaxLoadMore;
}

export default withAjaxLoadMore;
