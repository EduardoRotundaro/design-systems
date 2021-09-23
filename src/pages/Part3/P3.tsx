import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
`;

const CONTENT_1 = 'Cada pecinha representaria um componente.';
const CONTENT_2 = 'Cada pecinha já está predefinida.';
const CONTENT_3 = 'Precisamos apenas selecionar as que precisamos, e montá-las dentro de um padrão.';
const CONTENT_4 = 'Nossas pecinhas (componentes) podem se relacionar, se juntando e criando então novos componentes.';

const Part3P3: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row>
          <Column>
            <ChapterName>Exemplificando</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT_1}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT_2}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT_3}
            </P>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="large">
              {CONTENT_4}
            </P>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part3P3;
