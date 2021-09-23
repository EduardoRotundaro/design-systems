import styled from "styled-components";

import { PageType } from '../types';

import atomicDesign from '../../assets/images/atomic-design-2.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
`;

const CONTENT = 'Aqui seria o resultado da interação dos itens pertencentes a categoria átomos. Então poderíamos citar como exemplo uma sidebar, um card, uma barra de menu.';

const Part5P6: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row>
          <Column>
            <ChapterName>O atomic design</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Moléculas
            </P>
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

export default Part5P6;
