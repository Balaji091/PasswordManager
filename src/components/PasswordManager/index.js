import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import './index.css';
import PasswordItem from '../PasswordItem';

class PasswordManager extends Component {
  state = {
    webName: "",
    userName: "",
    password: "",
    searchInput: "",
    Lists: [],
    showPasswords: false,
  };

  setWebName = (event) => {
    this.setState({ webName: event.target.value });
  };

  setUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  setSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  appendItem = () => {
    const { webName, userName, password, Lists } = this.state;
    const newItem = {
      id: uuidv4(),
      webName,
      userName,
      password,
    };
    this.setState({
      Lists: [...Lists, newItem],
      webName: '',
      userName: '',
      password: '',
    });
  };

  toggleShowPasswords = () => {
    const{showPasswords}=this.state
    this.setState(prevState => ({ showPasswords: !prevState.showPasswords }));
   
  };
  deletePassword=id=>{
    const{Lists}=this.state
    const deleted=Lists.filter(item=>item.id!==id)
    this.setState({Lists:deleted})
  }

  render() {
    const { webName, userName, password, Lists, searchInput, showPasswords } = this.state;
    const count = Lists.length;
    
    const searchResults = Lists.filter(item => 
      item.webName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="password-manager-container">
        <header className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <h1>Password Manager</h1>
        </header>

        <section className="add-password-section">
          <div className="add-password-container">
            <h2>Add New Password</h2>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={webName}
                onChange={this.setWebName}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={this.setUserName}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.setPassword}
              />
            </div>
            <button
              type="button"
              className="add-button"
              onClick={this.appendItem}
            >
              Add
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="illustration"
          />
        </section>

        <section className="your-passwords-section">
          <div className="your-passwords-header">
            <h2>Your Passwords <span>{count}</span></h2>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.setSearchInput}
              />
            </div>
          </div>

          <div className="show-passwords">
            <input
              type="checkbox"
              id="show-passwords"
              checked={showPasswords}
              onChange={this.toggleShowPasswords}
            />
            <label htmlFor="show-passwords">Show Passwords</label>
          </div>

          <div className="passwords-list">
            { searchResults.length>0?(searchResults.map((item) => (
              <PasswordItem
                details={item}
                key={item.id}
                showPasswords={showPasswords}
                deletePassword={this.deletePassword}
              />
            ))):<p> no passwords</p>}
          </div>
        </section>
      </div>
    );
  }
}

export default PasswordManager;
