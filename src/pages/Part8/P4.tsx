import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import ChapterName from '../../components/ChapterName';
import P from '../../components/P';

const Module = styled.div`
`;

const CONTENT = 'O Design System é único para toda a empresa. Criar uma documentação acessível e alocar a ferramenta em um local acessível para todos.';

const Part8P4: PageType = function () {
  return (
    <Page background="4">
      <Module>
        <Row>
          <Column>
            <ChapterName>Guia rápido</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Documentação
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

export default Part8P4;
