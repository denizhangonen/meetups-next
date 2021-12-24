import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'The Great Colmar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/ColmarFrance.jpg/1920px-ColmarFrance.jpg',
    address: 'Some address ',
    description:
      'This is one those cool places that we had been during our epic road trip!',
  },
  {
    id: 'm2',
    title: 'Cute Heidelberg',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Heidelberg_20030918.jpg',
    address: 'Such a cool view from top',
    description:
      'This is one those cool places that we had been during our epic road trip!',
  },
  {
    id: 'm3',
    title: 'Magical Bruges',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rozenhoedkaai_Brugge.jpg/2560px-Rozenhoedkaai_Brugge.jpg',
    address: 'Excuse me sir, how can I go to Brrrrrrruuuuggggess??',
    description:
      'This is one those cool places that we had been during our epic road trip!',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // consume API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
