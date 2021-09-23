import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import P from '../components/P';
import ChapterName from "../components/ChapterName";

const Module = styled.div`
`;

const CONTENT = 'Design systems são ecossistemas de bibliotecas intaláveis, com componentes programados, padrões semânticos de design, e que reune padrões de comportamento.';

const Part1P1: PageType = function () {
  return (
    <Page background="1">
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

export default Part1P1;
