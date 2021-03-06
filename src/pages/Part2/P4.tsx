import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
  }
`;

const CONTENT = 'É importante estabelecer processos e desenvolver ferramentas que auxiliem na criação de novos produtos, levando em consideração a consistência, padronização e identidade da marca.';

const Part2P4: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Pra que isso?</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part2P4;
