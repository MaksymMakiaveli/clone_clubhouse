import { useRouter } from 'next/dist/client/router';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className='mt-30 container'>
        <Profile
          fullname='Maksym Makiaveli'
          username='Makiaveli'
          avatarUrl={
            'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1'
          }
          about='Test INFO'
        />
      </div>
    </>
  );
}
