class User {
  #id;
  #userName;
  #password;

  constructor(userName, password, id = null) {
    this.#userName = userName;
    this.#password = password;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get userName() {
    return this.#userName;
  }

  set userName(value) {
    this.#userName = value;
  }

  get password() {
    return this.#password;
  }

  set password(value) {
    this.#password = value;
  }
}

export default User;
