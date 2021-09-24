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
            <span>&#9733;</span>
            <div>{config.text}</div>
          </Content>
          <Action>
            <a href={config.link} target="_blank" rel="noopener noreferrer">
              <b>VER</b>
            </a>
          </Action>
        </ListItem>
      ))}
    </List>
  );
};

export default Summary;
