import React from 'react';
import { Avatar } from '../Avatar';

import styles from './ConversationCard.module.scss';
import whiteBlockStyles from '../WhiteBlock/WhiteBlock.module.scss';
import clsx from 'clsx';

interface ConversationCard {
  title: string;
  guests: string[];
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
}

export const ConversationCard: React.FC<ConversationCard> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakersCount,
}) => {
  return (
    <div className={clsx(whiteBlockStyles.block, styles.card)}>
      <h4 className={styles.title}>{title}</h4>
      <div className={clsx('d-flex mt-10', styles.content)}>
        <div className={styles.avatars}>
          {avatars.map((url, i) => (
            <Avatar
              key={url}
              width='45px'
              height='45px'
              src={url}
              className={avatars.length > 1 && i === avatars.length - 1 ? 'lastAvatar' : ''}
            />
          ))}
        </div>
        <div className={clsx(styles.info, 'ml-10')}>
          <ul className={styles.users}>
            {guests.map((name, i) => (
              <li key={name + i}>
                {name} <img src='/static/cloud.png' alt='cloud' width={14} height={14} />
              </li>
            ))}
          </ul>
          <ul className={styles.details}>
            <li>
              {guestsCount}
              <img
                src='/static/user.svg'
                alt='User Count'
                width={12}
                height={12}
                className={'ml-5'}
              />
            </li>
            <li>
              {speakersCount}
              <img
                src='/static/message.svg'
                alt='User Count'
                width={12}
                height={12}
                className={'ml-5'}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
