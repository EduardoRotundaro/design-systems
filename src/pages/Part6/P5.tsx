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

const CONTENT = 'Se adequado aos projetos, design systems podem incluir padrões de códigos, como nome de classes, ids, indentação, formatação e organização. Um projeto de um sistema de vai lidar com a integração entre design e a parte de desenvolvimento front-end, por isso é importante que funcione como o esperado.';

const Part6P5: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Os elementos que compõem um design system</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter className="legend">
          <Column lg="80%">
            <P color="black" size="extra-large" weight="bolder">
              Códigos
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

export default Part6P5;
