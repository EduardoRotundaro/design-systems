import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import H3 from '../components/H3';
import Column from '../components/Column';
import SummaryList from '../components/Summary';

const Module = styled.div`
  .title {
    padding-bottom: 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .title {
      padding-bottom: 10px;
    }
  }
`;

const Summary: PageType = function (props) {
  const { pageSetter } = props;

  const setPage = function (index: number) {
    if (pageSetter) pageSetter(index);
  };

  return (
    <Page background="2">
      <Module>
        <Row horizontalAlignCenter className="title">
          <Column xs="60%" lg="90%">
            <H3 color="black" weight="heavy">Conteúdo</H3>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <SummaryList items={[
              { text: 'O que é isso?', action: () => setPage(4) },
              { text: 'Pra que isso?', action: () => setPage(9) },
              { text: 'Exemplificando', action: () => setPage(16) },
              { text: 'Não é um style guide ou  um pattern library?', action: () => setPage(20) },
              { text: 'O atomic design', action: () => setPage(25) },
              { text: 'Os elementos que compõem um design system', action: () => setPage(35) },
              { text: 'Como começar?', action: () => setPage(42) },
              { text: 'Guia rápido', action: () => setPage(47) },
              { text: 'Considerações finais', action: () => setPage(52) },
              { text: 'Links interessantes', action: () => setPage(56) },
            ]}/>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Summary;
