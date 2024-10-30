// PasswordItem.js
import { Component } from "react";
import './index.css'

class PasswordItem extends Component {
  render() {
    const { details, deletePassword, showPasswords } = this.props; // Access showPasswords directly
    const { webName, userName, id, password } = details;

    return (
      <div className="password-item">
        <div className="password-icon">{userName[0]}</div>
        <div className="password-details">
          <p className="website-name">{webName}</p>
          <p className="username">{userName}</p>
          <p>
          {showPasswords ? password : "............."}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
          onClick={() => deletePassword(id)}
        />
      </div>
    );
  }
}

export default PasswordItem;