export const loadFile = (file: File): Promise<string> =>
  new Promise((res, rej) => {
    const reader = new FileReader();

    reader.onload = () => res(reader.result as string);
    reader.onerror = () => rej(reader.error);

    reader.readAsDataURL(file);
  });

export const loadImage = (imageUrl: string): Promise<HTMLImageElement> =>
  new Promise((res) => {
    const image = new Image();
    image.onload = () => res(image);
    image.src = imageUrl;
  });

export const loadCanvas = (image: HTMLImageElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);

  return canvas;
};

export const loadImageData = (canvas: HTMLCanvasElement): ImageData => {
  const context = canvas.getContext('2d');
  return context.getImageData(0, 0, canvas.width, canvas.height);
}