import React from 'react';
// import '../../App.css';
import './style.css';

function ProfileL (props) {
    return (
        <div class="tile is-ancestor" id = "ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary" id = "profile-name">
          <p class="title" id = "profile-title">Profile</p>
          <p class="subtitle">{props.user.company_name}</p>
          <p class="subtitle">{props.user.company_phone}</p>
          <p class="subtitle">{props.user.company_email}</p>
          <p class="subtitle">{props.user.address} {props.user.zip}</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger" id="garden-comments">
        <p class="title">Accepted Jobs</p>
        {/* <textarea class="textarea" placeholder="e.g. I have a combination of turf and real grass, I have a dog, etc.."></textarea> */}
        <button class="button is-white" id = "btn-comm">Submit</button>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success" id = "jobs">
      <div class="content">
        <p class="title">Available Jobs</p>
        {/* <p class="subtitle"></p> */}
        <div class="content">
        </div>
      </div>
    </article>
  </div>
</div>
  );
}

export default ProfileL;