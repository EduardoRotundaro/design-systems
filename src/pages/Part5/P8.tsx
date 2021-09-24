import styled from "styled-components";

import { PageType } from '../types';

import atomicDesign from '../../assets/images/atomic-design-4.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
  .image {
    padding-top: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
    .legend {
      padding-bottom: 10px;
    }
    .image {
      padding-top: 50px;
    }
  }
`;

const CONTENT = 'Aqui seria o resultado da interação de todos os componentes citados anteriormente, montando um produto modelo que pode ser utilizado por qualquer pessoa, sofrendo alguns ajustes.';

const Part5P8: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>O atomic design</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column xs="60%" lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Temlplates
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
        <Row className="image">
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={atomicDesign}
              heightInLg="230px"
              heightInMb="66px"
              widthInLg="700px"
              widthInMb="200px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part5P8;
