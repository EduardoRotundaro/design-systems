import { ComponentType } from './types';
import { TN } from './styles';

const Thumbnail: ComponentType = function (props) {
  const { imageAlt, imageSrc } = props;

  return (
    <TN>
      <img src={imageSrc} alt={imageAlt} />
    </TN>
  );
};

export default Thumbnail;
