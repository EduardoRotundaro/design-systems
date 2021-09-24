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

const CONTENT = 'A ideia é que o Design System seja um documento que garanta uma melhor consistência nos produtos, e que dialogue com todas as áreas envolvidas e não somente a parte visual.';

const Part9P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Considerações finais</ChapterName>
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

export default Part9P1;
