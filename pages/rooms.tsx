import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { ConversationCard } from '../components/ConversationCard';
export default function Rooms() {
  return (
    <>
      <Header />
      <div className='container mt-40 '>
        <div className='d-flex align-items-center justify-content-between'>
          <h1>All conversations</h1>
          <Button color='green'>+ Start Room</Button>
        </div>
        <div className=' mt-20'>
          <ConversationCard
            title='Создаю клон Clubhouse'
            avatars={[
              'https://images.unsplash.com/photo-1625053320432-3441e6a4a7f0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ]}
            guests={['Amon Brower', 'Maks Kuka', 'Makiaveli Sum']}
            guestsCount={44}
            speakersCount={3}
          />
        </div>
      </div>
    </>
  );
}
