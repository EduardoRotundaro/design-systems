import styled from "styled-components";

import { PageType } from './types';
import { 
  CONTENT_NAME,
  CONTENT_DATE,
} from '../data/metadata';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import H1 from '../components/H1';
import P from '../components/P';

const Module = styled.div``;

const Cover: PageType = function () {
  return (
    <Page background="5">
      <Module>
        <Row>
          <Column>
            <H1 weight="heavy">{CONTENT_NAME}</H1>
          </Column>
          <Column>
            <P size="small" weight="bold" color="white">
              {CONTENT_DATE}
            </P>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Cover;
