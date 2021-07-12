import React from 'react';
import styles from './room.module.scss';
import { Button } from '../Button';
import clsx from 'clsx';
import Link from 'next/link';

interface RoomProps {
  title: string;
}

export const Room: React.FC<RoomProps> = ({ title }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className='d-flex align-items-center justify-content-between'>
          <h2>{title}</h2>
          <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
            <Link href='/rooms'>
              <a>
                <Button color='gray' className={styles.leaveButton}>
                  <img width={18} height={18} src='/static/peace.png' alt='Hand black' />
                  Leave quietly
                </Button>
              </a>
            </Link>
          </div>
        </div>

        <div className='users'>
          {/* {users.map((obj) => (
            <Speaker key={obj.fullname} {...obj} />
          ))} */}
        </div>
      </div>
    </>
  );
};
