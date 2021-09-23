import styled from "styled-components";

import { PageType } from '../types';

import atomicDesign from '../../assets/images/atomic-design.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
`;

const CONTENT = 'Na metodologia do atomic design, lidamos com os componentes de forma crescente, saindo do menor para o maior.';

const Part5P4: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row>
          <Column>
            <ChapterName>O atomic design</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
        <Row>
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={atomicDesign}
              heightInLg="230px"
              heightInMb="230px"
              widthInLg="700px"
              widthInMb="700px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part5P4;
