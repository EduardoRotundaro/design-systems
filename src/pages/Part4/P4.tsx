import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
`;

const CONTENT = 'Pattern library representa um repositório de componentes de UI Design, e um style guide representa uma diretriz sobre a parte visual da interface.';

const Part4P4: PageType = function () {
  return (
    <Page background="4">
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

export default Part4P4;
