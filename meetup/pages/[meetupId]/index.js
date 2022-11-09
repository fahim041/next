import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://www.worldatlas.com/r/w1200/upload/bc/88/9c/shutterstock-666197236.jpg"
        title="a first meetup"
        address="3rd st, ottawa"
        description="this is a first meetup"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: 1,
        image:
          "https://www.worldatlas.com/r/w1200/upload/bc/88/9c/shutterstock-666197236.jpg",
        title: "first meetup",
        address: "3rd st, ottawa",
        description: "this is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
