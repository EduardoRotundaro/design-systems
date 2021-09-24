import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import P from '../../components/P';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
    .legend {
      padding-bottom: 10px;
    }
  }
`;

const CONTENT = 'Quais são os padrões da interface do usuário e os componentes de código necessários para criar produtos de maneira coerente em todos os dispositivos?';

const Part7P4: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Como começar?</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column xs="60%" lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Components
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <P color="black" size="extra-large">
              {CONTENT}
            </P>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part7P4;
