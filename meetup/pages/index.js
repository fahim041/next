import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const meetups = [
//   {
//     id: 1,
//     title: "A first meetup",
//     image:
//       "https://www.worldatlas.com/r/w1200/upload/bc/88/9c/shutterstock-666197236.jpg",
//     address: "2 st se, Ottawa",
//     description: "this is a first meetup",
//   },
//   {
//     id: 2,
//     title: "A second meetup",
//     image:
//       "https://www.worldatlas.com/r/w1200/upload/bc/88/9c/shutterstock-666197236.jpg",
//     address: "2 st se, Ottawa",
//     description: "this is a second meetup",
//   },
// ];

function Home({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/next-dev"
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
    revalidate: 1,
  };
}

export default Home;
