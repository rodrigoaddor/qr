import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import jsQR from 'jsqr';

import Data from './components/Data';
import { Scaffold, Body, Title, Info, Content } from './components/Scaffold';

import { loadCanvas, loadFile, loadImage, loadImageData } from './utils/image';
import Placeholder from './components/Placeholder';

const App = () => {
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement | null>(null);
  const [data, setData] = createSignal<string | null>(null);

  const handlePaste = async ({ clipboardData }: ClipboardEvent) => {
    const items = Array.from(clipboardData.items);

    const image = items.find((item) => item.type.startsWith('image/'));

    if (image) {
      const _canvas = await loadFile(image.getAsFile()).then(loadImage).then(loadCanvas);
      setCanvas(_canvas);
      readCode();
    } else {
      console.warn(
        'Invalid clipboard data',
        items.map((item) => item.type)
      );
    }
  };

  const readCode = async () => {
    const imageData = loadImageData(canvas());
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code !== null) {
      setData(code.data);
    }
  };

  onMount(() => document.addEventListener('paste', handlePaste));
  onCleanup(() => document.removeEventListener('paste', handlePaste));

  return (
    <Scaffold>
      <Body onPaste={handlePaste}>
        <Title>QR</Title>
        <Content>
          <Show when={canvas() !== null} fallback={<Placeholder />}>
            {canvas}
          </Show>
        </Content>
        <Info>
          <Show when={data() !== null}>
            <Data data={data()} />
          </Show>
        </Info>
      </Body>
    </Scaffold>
  );
};

export default App;
