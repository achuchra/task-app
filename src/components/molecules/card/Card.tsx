import React, { memo, ReactElement } from 'react';
import Image from '../../atoms/image/Image';
import Caption from '../../atoms/caption/Caption';
import './card.scss';

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
    <div className="card">
      <div className="card__image">
        <Image src={src} alt={alt} />
      </div>
      <div className="card__bottom">
        <Caption variant="big" text={`${title} ${first} ${last}`} />
        <Caption variant="small" text={location} />
      </div>
    </div>
  );
};

export default memo(Card);
