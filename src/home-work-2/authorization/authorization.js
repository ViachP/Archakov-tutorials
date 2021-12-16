const Authorization = () => {
  let email = "";
  let password = "";
  let input = document.getElementsByTagName("input");

  function onChangeInput(event) {
    const id = event.target.id;
    if (id === "email") {
      email = event.target.value;
    }
    if (id === "password") {
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
        id="email"
        type="text"
        placeholder="E-Mail"
      />
      <br />
      <br />
      <input
        onChange={onChangeInput}
        id="password"
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
