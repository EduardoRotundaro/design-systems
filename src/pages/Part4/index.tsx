import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import H1 from '../../components/H1';
import ChapterNumber from '../../components/ChapterNumber';

const Module = styled.div`
  .title-1 {
    padding-top: 10px;
  }
  .title-2 {
    padding-bottom: 10px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .title-1 {
      padding-top: 40px;
    }
    .title-2 {
      padding-bottom: 40px;
    }
  }
`;

const Part4: PageType = function () {
  return (
    <Page background="5">
      <Module>
        <Row>
          <Column>
            <ChapterNumber>04</ChapterNumber>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="title-1">
          <Column xs="60%" lg="90%">
            <H1 color="white" weight="heavy">Não é um style guide?</H1>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="title-2">
          <Column xs="60%" lg="90%">
            <H1 color="white" weight="heavy">Ou  um pattern library?</H1>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part4;
