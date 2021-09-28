import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
type PortalProps = React.PropsWithChildren<{
  onPortalDestroy?: () => void;
}>;
const Portal = ({ children, onPortalDestroy }: PortalProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    return () => {
      onPortalDestroy?.();
      document.body.removeChild(divRef.current as Node);
    };
  }, []);
  if (!divRef.current) {
    const node = document.createElement('div');
    node.className = `busyzz-react-popup__portal`;
    divRef.current = node;
    document.body.appendChild(node);
  }
  return ReactDOM.createPortal(children, divRef.current);
};

export default Portal;
