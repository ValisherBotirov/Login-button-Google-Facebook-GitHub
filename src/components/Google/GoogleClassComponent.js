import React from "react";
import ".././index.css";

class GoogleClassComponent extends React.Component {
  state = { kirganmi: null };
  authShort = null;
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "414185392369-atpfb4idtdgj6j59of6qe6aunopsb3l8.apps.googleusercontent.com",
          plugin_name: "Registratsiya",
          scope: "email",
        })
        .then(() => {
          this.authShort = window.gapi.auth2.getAuthInstance();
          this.setState({
            kirganmi: this.authShort.isSignedIn.get(),
          });
          console.log(this.authShort.isSignedIn.listen(this.waitingState));
        });
      console.log(window.gapi.auth2.getAuthInstance());
      // console.log(this.state.kirganmi);
    });
  }

  waitingState = (event) => {
    console.log(event);
    this.setState({ kirganmi: event });
  };

  signInClick = () => {
    return this.authShort.signIn();
  };
  signOutClick = () => {
    return this.authShort.signOut();
  };

  renderHtml = () => {
    if (this.state.kirganmi === null) {
      return <p>Kuting...</p>;
    } else if (this.state.kirganmi === false) {
      return (
        <button
          className="resgister--btn ui button google  red"
          onClick={this.signInClick}
        >
          {" "}
          Google
        </button>
      );
    } else if (this.state.kirganmi === true) {
      return (
        <button
          className="resgister--btn ui button google  blue"
          onClick={this.signOutClick}
        >
          {" "}
          Google
        </button>
      );
    }
  };

  render() {
    return (
      <div>
        {/* <button className="resgister--btn">Google</button> */}
        {this.renderHtml()}
      </div>
    );
  }
}

export default GoogleClassComponent;
