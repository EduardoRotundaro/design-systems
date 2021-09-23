import { ComponentType } from './types';
import { ImgContainer, Image } from './styles';

const ImageContainer: ComponentType = function (props) {
  const { 
    imageAlt, 
    imageSrc,
    heightInLg,
    heightInMb,
    widthInLg,
    widthInMb,
  } = props;

  return (
    <ImgContainer>
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        heightInLg={heightInLg}
        heightInMb={heightInMb}
        widthInLg={widthInLg}
        widthInMb={widthInMb}
      />      
    </ImgContainer>
  );
};

export default ImageContainer;
