import { ComponentType } from './types';
import { ComponentContainer, Card } from './styles';

const ProfileImage: ComponentType = function (props) {
  const { imageSrc, profileName } = props;

  return (
    <ComponentContainer>
      <Card>
        <div className="image">
          <img src={imageSrc} alt={`Foto de ${profileName}`} />
        </div>
        <div className="name">
          <h2>{profileName}<br/><span>Autor</span></h2>
        </div>
      </Card>
    </ComponentContainer>
  );
};

export default ProfileImage;
