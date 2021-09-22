import { PageType } from './types';
import {
  Section,
  Container,
  Content,
  Block,
} from './styles';

const Page: PageType = function (props) {
  const { children, background } = props;

  return (
    <Section background={background}>
      <Container>
        <Content>
          <Block className="popIn duration-600">
            {children}
          </Block>
        </Content>
      </Container>
    </Section>
  );
};

export default Page;
