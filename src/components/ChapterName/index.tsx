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
      <Line light={light} />
      <Title light={light}>
        {children}
      </Title>
      <Line light={light} />
    </ComponentContainer>
  );
}; 

export default ChapterName;
