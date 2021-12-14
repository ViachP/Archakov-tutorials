const Profile = (props) => {
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

  return (
    <div className="Profile">
      <p className="greeting">
        Привет, <b>{onlyN}!</b>
      </p>
      <p className="dateReg"> Дата регистрации: {date}</p>
    </div>
  );
};

export default Profile;
