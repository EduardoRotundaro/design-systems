import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import P from '../components/P';
import ChapterName from "../components/ChapterName";

const Module = styled.div`
`;

const CONTENT = 'É importante saber que DS não é um projeto, é um produto que será utilizado por outros produtos.';

const Part1P3: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row>
          <Column>
            <ChapterName>O que é isso?</ChapterName>
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

export default Part1P3;
