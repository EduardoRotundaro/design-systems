import styled from "styled-components";

import { PageType } from './types';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import ThanksMessage from '../components/ThanksMessage';

const Module = styled.div``;

const THanks: PageType = function () {
  return (
    <Page background="5">
      <Module>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="40%">
            <ThanksMessage />
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default THanks;
