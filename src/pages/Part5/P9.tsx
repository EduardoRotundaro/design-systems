import styled from "styled-components";

import { PageType } from '../types';

import atomicDesign from '../../assets/images/atomic-design-5.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
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

const CONTENT = 'Já essa etapa seria mais próximo do produto pronto final, sendo mais completo do que um template';

const Part5P9: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>O atomic design</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Páginas
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
        <Row className="image">
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

export default Part5P9;
