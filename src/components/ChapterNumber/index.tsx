import { ComponentType } from './types';
import { Badge, ComponentContainer } from './styles';

const ChapterNumber: ComponentType = function (props) {
  const { children } = props;

  return (
    <ComponentContainer>
      <Badge>
        {children}
      </Badge>
    </ComponentContainer>
  );
};

export default ChapterNumber;
