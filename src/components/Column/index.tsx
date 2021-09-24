import { FC, ReactNode } from 'react';

import { Col } from './styles';

type PropsType = {
  children?: ReactNode,
  xs?: string,
  lg?: string,
  className?: string,
};

const Column: FC<PropsType> = function (props) {
  const {
    children,
    className,
    xs,
    lg,
  } = props;

  return (
    <Col className={className || ''} xs={xs} lg={lg}>
      {children}
    </Col>
  );
};

export default Column;
