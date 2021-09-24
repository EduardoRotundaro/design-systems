import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import P from '../../components/P';

const Module = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
  }
`;

const CONTENT = 'O resultado tem diversos benefícios, tais como dinamicidade, fácil atualização, redução de custos e de tempo de trabalho, otimização de tarefas e da força de trabalho, interfaces coerentes e consistentes, entre outros.';

const Part9P3: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Considerações finais</ChapterName>
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

export default Part9P3;
