import React from 'react'
import '../../App.css';
import './style.css';


function ProfileH() {

  return (

    <div class="tile is-ancestor" id = "ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary" id = "profile-name">
          <p class="title" id = "profile-title">Profile</p>
          <p class="subtitle">First and Last Name</p>
          <p class="subtitle">Phone Number</p>
          <p class="subtitle">Email</p>
          <p class="subtitle">Address + Zip Code</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info" id ="garden-pic">
          <p class="title">Yard/Garden Picture</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" id = "garden-border"></img>
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger" id="garden-comments">
        <p class="title">Add any comments regarding your garden:</p>
        <textarea class="textarea" placeholder="e.g. I have a combination of turf and real grass, I have a dog, etc.."></textarea>
        <button class="button is-white" id = "btn-comm">Submit</button>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success" id = "jobs">
      <div class="content">
        <p class="title">Upcoming and completed jobs in your garden</p>
        <p class="subtitle">Once schedule first job, will appear here.</p>
        <div class="content">
        </div>
      </div>
    </article>
  </div>
</div>
  );
}

export default ProfileH;