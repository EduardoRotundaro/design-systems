import styled from "styled-components";

import { PageType } from '../types';

import designSystem from '../../assets/images/design-system.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
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
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>O que é isso?</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="70%" lg="90%">
            <ImageContainer 
              imageAlt="" 
              imageSrc={designSystem}
              heightInLg="675px"
              heightInMb="193px"
              widthInLg="700px"
              widthInMb="200px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part1P3;
