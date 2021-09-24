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
    .legend {
      padding-bottom: 10px;
    }
  }
`;

const CONTENT = 'Depois de absorver e ouvir designers, stakeholders e usuários, reunir os dados para construção dos pilares (princípios) do seu design system.';

const Part8P2: PageType = function () {
  return (
    <Page background="3">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Guia rápido</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Design
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

export default Part8P2;
