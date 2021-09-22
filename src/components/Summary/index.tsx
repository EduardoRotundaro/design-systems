import { ComponentType } from './types';
import { 
  List, 
  ListItem, 
  Action,
  Content,
} from './styles';

const Summary: ComponentType = function (props) {
  const { items } = props;

  return (
    <List>
      {items.map((config, index) => (
        <ListItem key={`summ_${index}`}>
          <Content>
            <span>{('0' + (index + 1)).slice(-2)}</span>
            <div>{config.text}</div>
          </Content>
          <Action>
            <button type="button" onClick={config.action}>
              <b>ACESSAR</b>
              <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
                <g>
                  <path 
                    transform="rotate(0,16,16) translate(0,6.09999979138373) scale(1.00000005960465,1.00000005960465)  " 
                    fill="#ECF0F1" 
                    d="M20.599993,0L31.999998,9.8999927 20.599993,19.799999 17.599995,17.199995 23.79999,11.799986 0,11.699995 0,7.9999988 23.79999,7.9999988 17.599995,2.5999906z" 
                  />
                </g>
              </svg>
            </button>
          </Action>
        </ListItem>
      ))}
    </List>
  );
};

export default Summary;
