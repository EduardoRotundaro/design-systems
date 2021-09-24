import styled from "styled-components";

import { PageType } from '../types';

import dsStructure from '../../assets/images/structure.webp';

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

const Part6P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="70%" lg="90%">
            <ImageContainer 
              imageAlt="" 
              imageSrc={dsStructure}
              heightInLg="450px"
              heightInMb="129px"
              widthInLg="700px"
              widthInMb="200px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part6P1;
