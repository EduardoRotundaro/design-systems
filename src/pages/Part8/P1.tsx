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
    .legend {
      padding-bottom: 10px;
    }
  }
`;

const CONTENT = 'Conhecer a marca e quais são os valores que estão envolvidos e as pessoas que fazem parte dentro dessa organização. É bom olhar os projetos e produtos existentes, e como eles vão ser afetados nessa criação inicial do design system.';

const Part8P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Guia rápido</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column xs="60%" lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Discovery
            </P>
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

export default Part8P1;
