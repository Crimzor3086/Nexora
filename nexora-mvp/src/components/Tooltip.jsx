import React from 'react';
import Tippy from '@tippyjs/react';

const Tooltip = ({ content, children, ...props }) => (
  <Tippy content={content} delay={[150, 0]} animation="shift-away" {...props}>
    <span>{children}</span>
  </Tippy>
);

export default Tooltip;
