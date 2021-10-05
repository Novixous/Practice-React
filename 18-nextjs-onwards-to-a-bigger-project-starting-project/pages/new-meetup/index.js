import React from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
