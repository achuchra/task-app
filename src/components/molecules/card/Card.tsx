import React, { memo, ReactElement } from 'react';

import Image from '../../atoms/image/Image';
import Caption from '../../atoms/caption/Caption';

interface IComponentProps {
  src: string;
  alt: string;
  title: string;
  first: string;
  last: string;
  location: string;
}

const Card = ({ src, alt, title, first, last, location }: IComponentProps): ReactElement => {
  return (
    <div>
      <Image src={src} alt={alt} />
      <Caption text={`${title} ${first} ${last}`} />
      <Caption text={location} />
    </div>
  );
};

export default memo(Card);
