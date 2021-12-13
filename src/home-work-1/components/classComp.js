import React from "react";

class ProfileComp extends React.Component {
  constructor(props) {
    const onlyN = props.name.split(" ")[0];
    const date = props.registredAt
      .toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .split(" ")
      .slice(0, -1)
      .join(" ");
    super(props);
    this.name = onlyN;
    this.date = date;
  }

  render() {
    return (
      <div className="Profile">
        <p className="greeting">
          Привет, <b>{this.name}!</b>
        </p>
        <p className="dateReg"> Дата регистрации: {this.date}</p>
      </div>
    );
  }
}

export default ProfileComp;
