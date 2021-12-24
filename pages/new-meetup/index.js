import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const AddMeetUp = (meetupData) => {
    console.log('AddMeetUp : ', meetupData);
  };
  return <NewMeetupForm onAddMeetup={AddMeetUp} />;
};

export default NewMeetup;
