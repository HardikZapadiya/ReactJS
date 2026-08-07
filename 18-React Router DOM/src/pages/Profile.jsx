function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="https://i.pravatar.cc/150" alt="Profile" />
      </div>

      <h2>Hardik Zapadiya</h2>
      <p>Frontend Developer</p>

      <div className="profile-info">
        <div>
          <h4>Email</h4>
          <span>hardik@example.com</span>
        </div>

        <div>
          <h4>Location</h4>
          <span>Rajkot, Gujarat</span>
        </div>

        <div>
          <h4>Skills</h4>
          <span>React • Java • Node.js</span>
        </div>
      </div>

      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;
