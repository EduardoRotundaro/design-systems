import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import H1 from '../../components/H1';
import ChapterNumber from '../../components/ChapterNumber';

const Module = styled.div`
  .title {
    padding: 10px 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .title {
      padding: 40px 0px;
    }
  }
`;

const Part2: PageType = function () {
  return (
    <Page background="5">
      <Module>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="90%">
            <ChapterNumber>02</ChapterNumber>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="title">
          <Column xs="60%" lg="90%">
            <H1 color="white" weight="heavy">Pra que isso?</H1>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part2;
