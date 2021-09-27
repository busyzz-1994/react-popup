import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
type PortalProps = React.PropsWithChildren<{}>;
const Portal = ({ children }: PortalProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  if (!divRef.current) {
    const node = document.createElement('div');
    node.className = `busyzz-react-popup__portal`;
    divRef.current = node;
    document.body.appendChild(node);
  }
  return ReactDOM.createPortal(children, divRef.current);
};

export default Portal;
