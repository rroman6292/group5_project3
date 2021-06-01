import {useState, useEffect} from 'react'
import '../../App.css';
import './style.css';
import axios from 'axios';



function ProfileH(props) {

  const [jobticketsarray, setJobTicketsArray] = useState([]);

  const [jobtickets, setJobTickets] = useState("");

  useEffect(() => {
    setJobTicketsArray(props.user.jobtickets)
  }, []);

const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    setJobTickets(value);
};

const handleSubmitFunction = async () => {
    const jobsarray = jobticketsarray;
    jobsarray.push(jobtickets);
    axios.put(`/api/homeowners/${props.user._id}`, {jobtickets: jobsarray}).then((response) => {
        console.log(response)
        setJobTicketsArray(response.data.jobtickets);
    })
    
}

  return (

    <div class="tile is-ancestor" id = "ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary" id = "profile-name">
          <p class="title" id = "profile-title">Profile</p>
          <p class="subtitle">{props.user.firstName} {props.user.lastName}</p>
          <p class="subtitle">{props.user.phoneNumber}</p>
          <p class="subtitle">{props.user.email}</p>
          <p class="subtitle">{props.user.address} {props.user.zipcode}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info" id ="garden-pic">
          <p class="title">Yard/Garden Picture</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" alt="garden background" id = "garden-border"></img>
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger" id="garden-comments">
        <p class="title">What is your garden needing?</p>
        <p>Remember to include a description of your project, your name and address. A landscaper will contact you.</p>
        <textarea name="jobtickets" value={jobtickets} onChange={handleInputChange} class="textarea" placeholder="Gives us a little description of the services you need."></textarea>
        <button class="button is-white" id = "btn-comm" onClick={handleSubmitFunction}>Submit</button>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success" id = "jobs">
      <div class="content">
        <p class="title">Upcoming and completed jobs in your garden</p>
        {
          jobticketsarray.map((ticket) =>{
            return(
              <>
              <p>{ticket}</p>
              </>
            )
          })
        }
        <div class="content">
        </div>
      </div>
    </article>
  </div>
</div>
  );
}

export default ProfileH;