import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

export default function Collapse({ children, isOpen }) {
  const nodeRef = React.useRef(null);
  const [parentHeight, setParentHeight] = useState('0');
  useEffect(() => {
    if (nodeRef) {
      const node = ReactDOM.findDOMNode(nodeRef.current);
      setParentHeight(node.firstChild.clientHeight);
    }
  }, [nodeRef, children]);

  return (
    <Transition in={isOpen} nodeRef={nodeRef} timeout={500}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            height: parentHeight,
            ...collapseStyle[state],
          }}
        >
          <div>{children}</div>
        </div>
      )}
    </Transition>
  );
}
const collapseStyle = {
  entering: { overflow: 'hidden' },
  entered: { overflow: 'initial' },
  exiting: { height: 0, overflow: 'hidden' },
  exited: { height: 0, overflow: 'hidden' },
};

const defaultStyle = {
  transition: `transform 500ms, height 500ms ease`,
  opacity: 1,
};
