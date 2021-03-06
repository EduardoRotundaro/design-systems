import styled from "styled-components";

import { PageType } from '../types';

import legoPieces from '../../assets/images/pieces-lego.webp';

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
    .image {
      padding-top: 50px;
    }
  }
`;

const CONTENT = 'Nosso sistema de design seria um conjunto de pecinhas padronizadas, que seguem a mesma consistĂȘncia de design.';

const Part3P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Exemplificando</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="image">
          <Column xs="70%" lg="90%">
            <ImageContainer 
              imageAlt="" 
              imageSrc={legoPieces}
              heightInLg="404px"
              heightInMb="115px"
              widthInLg="700px"
              widthInMb="200px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part3P2;
