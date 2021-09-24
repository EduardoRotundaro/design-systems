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
  .name {
    padding: 10px 0px;
  }
  .item {
    padding: 5px 0px;
  }
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
          <Column xs="60%" lg="90%">
            <Row horizontalAlignCenter>
              <Column xs="170px" lg="320px">
                <Thumbnail imageAlt="" imageSrc={profilePhoto1} />
              </Column>
              <Column xs="170px" lg="320px">
                <Thumbnail imageAlt="" imageSrc={profilePhoto2} />
              </Column>
            </Row>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <P color="white" weight="bold" size="extra-large">
              {AUTHOR_FULL}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="100%" className="item">
            <AboutItem text={AUTHOR_AGE} icon="age" />
          </Column>
          <Column xs="60%" lg="100%" className="item">
            <AboutItem text={AUTHOR_LOCATION} icon="location" />
          </Column>
          <Column xs="60%" lg="100%" className="item">
            <AboutItem text={AUTHOR_GRADUATION} icon="graduation" />
          </Column>
          <Column xs="60%" lg="100%" className="item">
            <AboutItem text={AUTHOR_GRADUATE_FROM} icon="college" />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default About;
