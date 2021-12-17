const Authorization = () => {
  let email = "";
  let password = "";

  function onChangeInput(event) {
    const name = event.target.name;
    if (name === "email") {
      email = event.target.value;
    }
    if (name === "password") {
      password = event.target.value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() && password.trim()) {
      console.log({ email, password });
    } else {
      alert("Заполните все поля.");
    }
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onChangeInput}
        name="email"
        type="text"
        placeholder="E-Mail"
      />
      <br />
      <br />
      <input
        onChange={onChangeInput}
        name="password"
        type="password"
        placeholder="Пароль"
      />
      <br />
      <br />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Authorization;
