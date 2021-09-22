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
`;

const Author: PageType = function () {
  return (
    <Page background="black">
      <Module>
        <Row>
          <Column className="profile">
            <ProfileImage imageSrc={profilePhoto} profileName={AUTHOR} />
          </Column>
        </Row>
        <Row>
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
