import { ComponentType } from './types';
import {
  ComponentContainer,
  Line,
  Title,
} from './styles';

const ChapterName: ComponentType = function (props) {
  const { children, light } = props;
  
  return (
    <ComponentContainer>
      <Line />
      <Title light={light}>
        {children}
      </Title>
      <Line />
    </ComponentContainer>
  );
}; 

export default ChapterName;
