import IntroSubText from '../Intro/IntroSubText';
import Connect from './Connect';
import Profile from './Profile';
import AboutContent from './AboutContent';

export default function About() {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Profile />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ fontSize: '40px', fontWeight: '600' }}>
            프론트엔드 개발자 임시은
          </p>
          <p>신입</p>
          <Connect />
        </div>
      </div>
      <AboutContent />
    </section>
  );
}
