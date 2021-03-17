import React, { ReactElement } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../../../assets/icon-placeholder.png';

interface IComponentProps {
  src: string;
  alt?: string;
}

const Image = ({ src, alt = '' }: IComponentProps): ReactElement => (
  <LazyLoadImage src={src} alt={alt} height="128px" width="128px" placeholderSrc={placeholder} />
  // <img src={src} alt={alt} height="128" width="128" />
);

export default Image;
