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

const CONTENT = 'É uma metodologia eficiente para a criação de um Design System, uma vez que a equipe terá clareza sobre cada etapa da sua construção.';

const Part5P3: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>O atomic design</ChapterName>
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

export default Part5P3;
