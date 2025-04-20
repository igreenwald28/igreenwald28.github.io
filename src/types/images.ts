export interface ImageData {
  src: string;
  orientation: 'portrait' | 'landscape';
}

export interface ImageCollections {
  italy: ImageData[];
  vietnam: ImageData[];
  centraleurope: ImageData[];
  montana: ImageData[];
  nyc: ImageData[];
  pacnw: ImageData[];
  film: ImageData[];
  climbing: ImageData[];
  japan: ImageData[];
}

export interface ImageDataJSON {
  collections: ImageCollections;
}