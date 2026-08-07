
function Settings() {
  return (
    <div className="settings-card">
      <h2>⚙️ Settings</h2>

      <div className="setting-item">
        <label>Dark Mode</label>
        <input type="checkbox" />
      </div>

      <div className="setting-item">
        <label>Email Notifications</label>
        <input type="checkbox" />
      </div>

      <div className="setting-item">
        <label>Language</label>
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
        </select>
      </div>

      <button>Save Changes</button>
    </div>
  );
}

export default Settings;
