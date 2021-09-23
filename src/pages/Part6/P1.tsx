import styled from "styled-components";

import { PageType } from '../types';

import dsStructure from '../../assets/images/structure.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
`;

const Part6P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row>
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row>
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={dsStructure}
              heightInLg="450px"
              heightInMb="450px"
              widthInLg="700px"
              widthInMb="700px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part6P1;
