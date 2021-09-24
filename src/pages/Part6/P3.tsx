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

const CONTENT = 'É pensada a identidade visual, seguindo os objetivos e valores. Um guia de estilo é fundamental para definir os princípios de design, identidade da marca, cores, tipografia...';

const Part6P3: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Guia de Estilo
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

export default Part6P3;
