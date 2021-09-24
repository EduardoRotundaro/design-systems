import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
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
        <Row className="name">
          <Column>
            <ChapterName>O atomic design</ChapterName>
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

export default Part5P3;
