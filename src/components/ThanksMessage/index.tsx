import { ComponentType } from './types';
import { Dialog, Btn, Text } from './styles';

const action = function () {
  console.log(
    '%cNão tem nenhum erro, o botão não tem ação mesmo 🤡',
    'color:green;font-weigth: bold;'
  );
};

const ThanksMessage: ComponentType = function () {
  return (
    <Dialog>
      <Text>Obrigado!</Text>
      <Btn>
        <button type="button" onClick={action}>
          OK
        </button>
      </Btn>
    </Dialog>
  );
};

export default ThanksMessage;
