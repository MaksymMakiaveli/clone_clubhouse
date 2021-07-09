import Link from 'next/link';
import React from 'react';

type BackButtonProps = {
  title: string;
  href: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div className='d-flex mb-30 cup'>
          <img src='/static/back-arrow.svg' alt='Back' className='mr-10' />
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};
