import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import H1 from '../components/H1';
import ChapterNumber from '../components/ChapterNumber';

const Module = styled.div`
`;

const Part9: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row>
          <Column>
            <ChapterNumber>09</ChapterNumber>
          </Column>
        </Row>
        <Row>
          <Column>
            <H1 color="black" weight="heavy">Considerações finais</H1>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part9;
