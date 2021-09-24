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

const CONTENT = 'Como deve ser a aparência e comportamento da interface do produto?';

const Part7P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Como começar?</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column xs="60%" lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Written content
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

export default Part7P2;
