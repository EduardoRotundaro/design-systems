import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import H2 from '../components/H2';
import Column from '../components/Column';
import SummaryList from '../components/Summary';

const Module = styled.div``;

const Summary: PageType = function (props) {
  const { pageSetter } = props;

  const setPage = function (index: number) {
    if (pageSetter) pageSetter(index);
  };

  return (
    <Page background="2">
      <Module>
        <Row>
          <Column>
            <H2 color="black" weight="heavy">Conteúdo</H2>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <SummaryList items={[
              { text: 'O que é isso?', action: () => setPage(0) },
              { text: 'Pra que isso?', action: () => setPage(0) },
              { text: 'Exemplificando', action: () => setPage(0) },
              { text: 'Não é um style guide ou  um pattern library?', action: () => setPage(0) },
              { text: 'O atomic design', action: () => setPage(0) },
              { text: 'Os elementos que compõem um design system', action: () => setPage(0) },
              { text: 'Como começar?', action: () => setPage(0) },
              { text: 'Guia rápido', action: () => setPage(0) },
              { text: 'Considerações finais', action: () => setPage(0) },
              { text: 'Links interessantes', action: () => setPage(0) },
              { text: 'Que site é esse aqui?', action: () => setPage(0) },
            ]}/>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Summary;
