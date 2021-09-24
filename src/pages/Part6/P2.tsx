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
    .legend {
      padding-bottom: 10px;
    }
  }
`;

const CONTENT = 'Antes de pensar em grid, tipografia e cores, é preciso pensar nos objetivos e valores da empresa. Esses fundamentos guiarão todas as escolhas feitas, evitando projetos sem coesão com os princípios da instituição.';

const Part6P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Objetivos e valores
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
      </Module>
    </Page>
  );
};

export default Part6P2;
