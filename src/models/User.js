class User {
  #id;
  #userName;
  #password;
  #role;

  constructor(userName, password, role, id = null) {
    this.#userName = userName;
    this.#password = password;
    this.#role = role;
    
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

  get role() {
    
    return this.#role;
  }

  set role(value) {
    this.#role = value;
  }
}

export default User;
