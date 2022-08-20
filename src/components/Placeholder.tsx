import { styled } from 'solid-styled-components';

const Placeholder = () => {
  return (
    <Wrapper>
      Paste an image
      <br />
      to continue
    </Wrapper>
  );
};

const Wrapper = styled.div({
  padding: '1rem',
  border: '4px dashed rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',

  fontWeight: 100,
  fontSize: '1.5rem',
  textAlign: 'center',
});

export default Placeholder;
