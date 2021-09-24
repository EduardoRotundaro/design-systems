import styled from "styled-components";

import { PageType } from '../types';

import designSystem from '../../assets/images/design-system.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
  }
`;

const Part1P3: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>O que é isso?</ChapterName>
          </Column>
        </Row>
        <Row>
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={designSystem}
              heightInLg="675px"
              heightInMb="675px"
              widthInLg="700px"
              widthInMb="700px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part1P3;
