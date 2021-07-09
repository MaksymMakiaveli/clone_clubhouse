import Link from 'next/link';
import React from 'react';
import { Button } from '../components/Button';
import { ConversationCard } from '../components/ConversationCard';
import { Header } from '../components/Header';
import Axios from '../core/axios';

export default function RoomsPage({ rooms }) {
  return (
    <>
      <Header />
      <div className='container mt-40 '>
        <div className='d-flex align-items-center justify-content-between'>
          <h1>All conversations</h1>
          <Button color='green'>+ Start Room</Button>
        </div>
        <div className='grid mt-30'>
          {rooms.map((obj) => (
            <Link key={obj.id} href={`/rooms/${obj.id}`}>
              <a className='d-flex'>
                <ConversationCard
                  title={obj.title}
                  avatars={obj.avatars}
                  guests={obj.guests}
                  guestsCount={obj.guestCount}
                  speakersCount={obj.speakersCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');
    return {
      props: { rooms: data },
    };
  } catch (error) {
    return {
      props: { rooms: [] },
    };
  }
};
