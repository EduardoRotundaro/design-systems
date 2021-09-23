import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
`;

const CONTENT = 'É um conjunto completo de padrões do projeto, documentação e princípios, juntamente com um kit de ferramentas de design e código.';

const Part4P2: PageType = function () {
  return (
    <Page background="3">
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

export default Part4P2;
