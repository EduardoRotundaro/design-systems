import styled from "styled-components";

import { PageType } from '../types';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Links from '../../components/Links';
import ChapterName from '../../components/ChapterName';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
  }
`;

const Part10P1: PageType = function () {
  return (
    <Page background="2">
      <Module>
        <Row horizontalAlignCenter className="name">
          <Column xs="60%" lg="90%">
            <ChapterName>Links interessantes</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="90%">
            <Links items={[
              { text: 'Artigo detalhado sobre o funcionamento de um design system e suas vantagens.', link: 'https://medium.com/aela/design-system-como-funciona-e-porque-us%C3%A1-lo-edc31029f337' },
              { text: 'Construindo uma linguagem visual, por Airbnb.', link: 'https://airbnb.design/building-a-visual-language/' },
              { text: '10 sitemas de design incríves.', link: 'https://designerup.co/blog/10-best-design-systems-and-how-to-learn-and-steal-from-them/' },
              { text: 'Repositório AWESOME com diveros sistemas de design', link: 'https://github.com/alexpate/awesome-design-systems' },
            ]}/>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part10P1;
