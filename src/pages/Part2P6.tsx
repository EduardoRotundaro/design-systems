import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import P from '../components/P';
import ChapterName from "../components/ChapterName";

const Module = styled.div`
`;

const CONTENT = 'É disponibilizado para toda a equipe (do design ao desenvolvimento) para que, além de tudo, possa garantir uniformidade na experiência final do usuário.';

const Part2P6: PageType = function () {
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

export default Part2P6;
