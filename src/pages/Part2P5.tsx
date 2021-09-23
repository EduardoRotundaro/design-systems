import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import P from '../components/P';
import ChapterName from "../components/ChapterName";

const Module = styled.div`
`;

const CONTENT = 'Um DS é criado então como um produto vivo, com padões visuais e de código, que melhora essa consistência de todos os produtos.';

const Part2P5: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row>
          <Column>
            <ChapterName>Pra que isso?</ChapterName>
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

export default Part2P5;
