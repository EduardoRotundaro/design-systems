import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  AUTHOR,
  AUTHOR_EMAIL,
  AUTHOR_GITHUB,
  AUTHOR_INSTAGRAM,
  AUTHOR_LINKEDIN,
} from '../../data/metadata';

import profilePhoto from '../../assets/images/profile.jpg';

import { 
  Module,
  Profile,
  Contact,
  ContactItem,
} from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import {
  GMailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../../components/Icons';

type PropsType = {
  content: ContentType,
};

const About: FC<PropsType> = function (props) {
  return (
    <Module className="popIn duration-600">
      <Row>
        <Column className="profile">
          <Profile>
            <div className="card">
              <div className="image">
                <img src={profilePhoto} alt="" />
              </div>
              <div className="name">
                <h2>{AUTHOR}<br/><span>Autor</span></h2>
              </div>
            </div>
          </Profile>
        </Column>
      </Row>
      <Row className="contact">
        <Column>
          <Contact>
            <ContactItem linkedin href={AUTHOR_LINKEDIN} aria-label="Contato pelo Linkedin" target="_blank" rel="noopener">
              <LinkedinIcon />
            </ContactItem>
            <ContactItem instagram href={AUTHOR_INSTAGRAM} aria-label="Contato pelo Instagram" target="_blank" rel="noopener">
              <InstagramIcon />
            </ContactItem>
            <ContactItem github href={AUTHOR_GITHUB} aria-label="Contato pelo Github" target="_blank" rel="noopener">
              <GithubIcon />
            </ContactItem>
            <ContactItem gmail href={`mailto:${AUTHOR_EMAIL}`} aria-label="Contato pelo e-mail" target="_blank" rel="noopener">
              <GMailIcon />
            </ContactItem>
          </Contact>
        </Column>
      </Row>
    </Module>
  );
};

export default About;
