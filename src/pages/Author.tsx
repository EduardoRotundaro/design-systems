import styled from "styled-components";

import { PageType } from './types';
import profilePhoto from '../assets/images/profile-1.webp';
import { 
  AUTHOR,
  AUTHOR_EMAIL,
  AUTHOR_GITHUB,
  AUTHOR_INSTAGRAM,
  AUTHOR_LINKEDIN,
} from '../data/metadata';

import Page from '../Page';
import Row from '../components/Row';
import Column from '../components/Column';
import ProfileImage from '../components/ProfileImage';
import SocialLinks from '../components/SocialLinks';

const Module = styled.div`
  .profile {
    z-index: 0;
  }
  .social {
    padding-top: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    .social {
      padding-top: 80px;
    }
  }
`;

const Author: PageType = function () {
  return (
    <Page background="black">
      <Module>
        <Row horizontalAlignCenter>
          <Column xs="60%" lg="100%" className="profile">
            <ProfileImage imageSrc={profilePhoto} profileName={AUTHOR} />
          </Column>
        </Row>
        <Row className="social">
          <Column>
            <SocialLinks links={[
              { ariaLabel: 'Contato pelo Linkedin', link: AUTHOR_LINKEDIN, type: 'linkedin' },
              { ariaLabel: 'Contato pelo Instagram', link: AUTHOR_INSTAGRAM, type: 'instagram' },
              { ariaLabel: 'Contato pelo Github', link: AUTHOR_GITHUB, type: 'github' },
              { ariaLabel: 'Contato pelo e-mail', link: `mailto:${AUTHOR_EMAIL}`, type: 'gmail' },
            ]}/>
          </Column>
        </Row>
      </Module>
    </Page>
  );
};

export default Author;
