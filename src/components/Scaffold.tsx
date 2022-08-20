import { styled } from 'solid-styled-components';

export const Scaffold = styled.div({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'var(--background-color)',
  padding: '2rem 0',
  display: 'grid',
  placeItems: 'stretch',
});

export const Body = styled.div({
  display: 'grid',
  placeItems: 'center',
  gridAutoRows: '1fr',
  gridTemplateAreas: `
    "title"
    "content"
    "info"
  `,

  fontFamily: '"Roboto", sans-serif',
  fontWeight: 300,
  color: 'var(--text-color)',
});

export const Title = styled.h2({
  gridArea: 'title',

  fontFamily: '"Raleway", sans-serif',
  fontWeight: 600,
  fontSize: '4rem',
});

export const Content = styled.div({
  gridArea: 'content',
});

export const Info = styled.div({
  gridArea: 'info',
  fontSize: '2rem',
});
