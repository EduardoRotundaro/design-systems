import styled from "styled-components";

import { PageType } from '../types';

import lego from '../../assets/images/project-lego.webp';

import Page from '../../Page';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';
import ChapterName from '../../components/ChapterName';
import ImageContainer from '../../components/ImageContainer';

const Module = styled.div`
  .name {
    padding-bottom: 30px;
  }
  .image {
    padding-top: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .name {
      padding-bottom: 50px;
    }
    .image {
      padding-top: 50px;
    }
  }
`;

const CONTENT = 'Pensar em design systems é como pensar em LEGOs. Imagine um projeto novo como algo a ser criado com peças de LEGO.';

const Part3P1: PageType = function () {
  return (
    <Page background="1">
      <Module>
        <Row className="name">
          <Column>
            <ChapterName>Exemplificando</ChapterName>
          </Column>
        </Row>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="80%">
            <P color="black" size="large">
              {CONTENT}
            </P>
          </Column>
        </Row>
        <Row className="image">
          <Column>
            <ImageContainer 
              imageAlt="" 
              imageSrc={lego}
              heightInLg="501px"
              heightInMb="251px"
              widthInLg="400px"
              widthInMb="200px"
            />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Part3P1;
