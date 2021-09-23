import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
`;

const CONTENT = 'O design system é um apanhado de informações de várias áreas do design.';

const Part4P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row>
          <Column>
            <ChapterName>Não é um style guide ou um pattern library?</ChapterName>
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

export default Part4P1;
