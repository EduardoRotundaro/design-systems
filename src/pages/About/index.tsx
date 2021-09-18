import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  AUTHOR_FULL,
  AUTHOR_LOCATION,
  AUTHOR_AGE,
  AUTHOR_GRADUATION,
  AUTHOR_GRADUATE_FROM,
} from '../../data/metadata';

import profilePhoto from '../../assets/images/profile.jpg';

import { 
  Module,
  Profile,
  AboutItem,
} from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import {
  CollegeIcon,
  GraduationIcon,
  LocationIcon,
  AgeIcon,
} from '../../components/Icons';

type PropsType = {
  content: ContentType,
};

const About: FC<PropsType> = function (props) {
  return (
    <Module className="popIn duration-600">
      <Row horizontalAlignCenter>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
      </Row>
      <Row className="about">
        <Column>
          <AboutItem>
            <P color="white" weight="bold" size="extra-large">
              {AUTHOR_FULL}
            </P>
          </AboutItem>
          <AboutItem>
            <AgeIcon />
            <P size="large" color="white" weight="bold">
              {AUTHOR_AGE}
            </P>
          </AboutItem>
          <AboutItem>
            <LocationIcon />
            <P size="large" color="white" weight="bold">
              {AUTHOR_LOCATION}
            </P>
          </AboutItem>
          <AboutItem>
            <GraduationIcon />
            <P size="large" color="white" weight="bold">
              {AUTHOR_GRADUATION}
            </P>
          </AboutItem>
          <AboutItem>
            <CollegeIcon />
            <P size="large" color="white" weight="bold">
              {AUTHOR_GRADUATE_FROM}
            </P>
          </AboutItem>
        </Column>
      </Row>
    </Module>
  );
};

export default About;
