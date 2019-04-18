import * as React from 'react';
import * as ReactDOM from 'react-dom';

const defaultProps = {
  modalRoot: document.getElementById('modal-sidebar'),
};

interface Props {
  children: JSX.Element[];
}

type DefaultProps = Readonly<typeof defaultProps>;
// EXPORTED COMPONENT
const SidebarPortal: React.FC<Props & Partial<DefaultProps>> = ({
  children,
  modalRoot,
}): React.ReactPortal =>
  ReactDOM.createPortal(children, modalRoot as HTMLElement);

SidebarPortal.defaultProps = defaultProps;

export default SidebarPortal;
