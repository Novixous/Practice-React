import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(props.meetups);
  }, []);

  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sa:IloveTora480598@firstcluster.fxhym.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
