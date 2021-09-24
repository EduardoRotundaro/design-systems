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

const CONTENT = 'É um conjunto completo de padrões do projeto, documentação e princípios, juntamente com um kit de ferramentas de design e código.';

const Part4P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Não é um style guide ou um pattern library?</ChapterName>
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

export default Part4P2;
