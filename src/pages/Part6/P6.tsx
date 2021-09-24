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
    .legend {
      padding-bottom: 10px;
    }
  }
`;

const CONTENT = 'A documentação é o que vai diferenciar o Design System de um simples repositório ou Pattern Library. As documentações devem conter todas as regras do que fazer e do que não fazer e devem ser de fácil entendimento, para garantir que todos os estilos e interações estejam alinhados. É importante lembrar que o produto pode (e deve) sofrer constantes mudanças e atualizações, sem perder sua consistência.';

const Part6P6: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
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

export default Part6P6;
