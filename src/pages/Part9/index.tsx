import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import H1 from '../../components/H1';
import ChapterNumber from '../../components/ChapterNumber';

const Module = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .title {
      padding: 40px 0px;
    }
  }
`;

const Part9: PageType = function () {
  return (
    <Page background="5">
      <Module>
        <Row>
          <Column>
            <ChapterNumber>09</ChapterNumber>
          </Column>
        </Row>
        <Row className="title">
          <Column>
            <H1 color="white" weight="heavy">Considerações finais</H1>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part9;
