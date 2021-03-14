import React, { ReactElement } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../../../assets/placeholder.jpg';

interface IComponentProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: IComponentProps): ReactElement => (
  <LazyLoadImage src={src} alt={alt} height="128" width="128" placeholderSrc={placeholder} />
);

export default Image;
