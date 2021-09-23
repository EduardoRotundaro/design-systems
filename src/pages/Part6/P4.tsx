import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
`;

const CONTENT = 'Após definido a identidade visual, é hora de construir os elementos que serão utilizados no desenvolvimento de um produto. Na criação dessa biblioteca, entram desenvolvedores e UI Designers.';

const Part6P4: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row>
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Biblioteca de componentes e padrões
            </P>
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

export default Part6P4;
