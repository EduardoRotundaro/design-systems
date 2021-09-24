import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
  }
`;

const CONTENT = 'Geralmente contém coleções de documentos, artigos, exemplos, trechos de códigos, prints, instruções de design, e vários outros conteúdos digitais, além de apenas componentes.';

const Part1P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>O que é isso?</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part1P2;
