import React from 'react';
import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { Avatar } from '../../Avatar';

import styles from './ChooseAvatarStep.module.scss';
import { MainContext } from '../../../pages';

export const ChooseAvatarStep: React.FC = () => {
  const [avatarURL, setAvatarURL] = React.useState<string>(
    'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1',
  );
  const { onNextStep } = React.useContext(MainContext);
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleChangeImage = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setAvatarURL(imageURL);
    }
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon='/static/celebration.png'
        description='How’s this photo?'
        title='Okay, Maksym Makiaveli'
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width='120px' height='120px' src={avatarURL} />
        </div>
        <div className='mb-30'>
          <label htmlFor='image' className='link cup'>
            Choose a different photo
          </label>
        </div>
        <input id='image' type='file' hidden ref={inputFileRef} />
        <Button onClick={onNextStep}>
          Next
          <img className='d-ib ml-10' src='/static/arrow.svg' />
        </Button>
      </WhiteBlock>
    </div>
  );
};
