import styled from "styled-components";

import { PageType } from '../types';

import lego from '../../assets/images/project-lego.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
`;

const CONTENT = 'Pensar em design systems é como pensar em LEGOs. Imagine um projeto novo como algo a ser criado com peças de LEGO.';

const Part3P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row>
          <Column>
            <ChapterName>Exemplificando</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={lego}
              heightInLg="501px"
              heightInMb="501px"
              widthInLg="400px"
              widthInMb="400px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part3P1;
