import { ComponentType } from './types';
import { Social, SocialItem } from './styles';

import {
  GMailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../Icons';

const SocialLinks: ComponentType = function (props) {
  const { links } = props;

  return (
    <Social>
      {links.map((config, index) => (
        <SocialItem
          key={`social_link_${index}`}
          type={config.type}  
          href={config.link} 
          aria-label={config.ariaLabel} 
          target="_blank" 
          rel="noopener"
        >
          {config.type === 'github' && (
            <GithubIcon />
          )}
          {config.type === 'gmail' && (
            <GMailIcon />
          )}
          {config.type === 'instagram' && (
            <InstagramIcon />
          )}
          {config.type === 'linkedin' && (
            <LinkedinIcon />
          )}
        </SocialItem>
      ))}
    </Social>
  );
};

export default SocialLinks;
