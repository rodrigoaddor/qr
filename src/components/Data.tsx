import { createEffect, Show } from 'solid-js';
import { styled } from 'solid-styled-components';

interface DataProps {
  data: string;
}

const Data = ({ data }: DataProps) => {
  const isUrl = (): boolean => {
    try {
      new URL(data);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Show when={isUrl()} fallback={<span>{data}</span>}>
      <Link href={data}>{data}</Link>
    </Show>
  );
};

const Link = styled.a({
  textTransform: 'none',
  color: 'inherit',
});

export default Data;
