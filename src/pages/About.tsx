import styled from "styled-components";

import { PageType } from './types';
import { 
  AUTHOR_FULL,
  AUTHOR_LOCATION,
  AUTHOR_AGE,
  AUTHOR_GRADUATION,
  AUTHOR_GRADUATE_FROM,
} from '../data/metadata';

import profilePhoto1 from '../assets/images/profile-2.webp';
import profilePhoto2 from '../assets/images/profile-3.webp';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import P from '../components/P';
import Thumbnail from '../components/Thumbnail';
import AboutItem from '../components/AboutItem';

const Module = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding: 30px 0px;
    }
    .item {
      padding: 10px 0px;
    }
  }
`;

const About: PageType = function () {
  return (
    <Page background="black">
      <Module>
        <Row horizontalAlignCenter>
          <Column lg="320px">
            <Thumbnail imageAlt="" imageSrc={profilePhoto1} />
          </Column>
          <Column lg="320px">
            <Thumbnail imageAlt="" imageSrc={profilePhoto2} />
          </Column>
        </Row>
        <Row className="name">
          <Column>
            <P color="white" weight="bold" size="extra-large">
              {AUTHOR_FULL}
            </P>
          </Column>
        </Row>
        <Row>
          <Column className="item">
            <AboutItem text={AUTHOR_AGE} icon="age" />
          </Column>
          <Column className="item">
            <AboutItem text={AUTHOR_LOCATION} icon="location" />
          </Column>
          <Column className="item">
            <AboutItem text={AUTHOR_GRADUATION} icon="graduation" />
          </Column>
          <Column className="item">
            <AboutItem text={AUTHOR_GRADUATE_FROM} icon="college" />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default About;
