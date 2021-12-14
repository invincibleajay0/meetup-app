import { useNavigate  } from 'react-router-dom';
import NewMeetupFrom from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
       fetch('https://react-getting-started-f7e50-default-rtdb.firebaseio.com/meetups.json',
       {
           method: 'POST',
           body: JSON.stringify(meetupData),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(() => {
           history('/')
       }); 
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;