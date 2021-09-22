import { ComponentType } from './types';
import { ComponentContainer } from './styles';

import {
  CollegeIcon,
  GraduationIcon,
  LocationIcon,
  AgeIcon,
} from '../Icons';

const AboutItem: ComponentType = function (props) {
  const { icon, text } = props;

  return (
    <ComponentContainer>
      {icon === 'age' && <AgeIcon />}
      {icon === 'college' && <CollegeIcon />}
      {icon === 'graduation' && <GraduationIcon />}
      {icon === 'location' && <LocationIcon />}
      <span>{text}</span>
    </ComponentContainer>
  );
};

export default AboutItem;
