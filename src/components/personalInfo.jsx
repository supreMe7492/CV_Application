import "../styles/input.css";
function PersonalInputs({
  onNameChange,
  nameValue,
  onAddressChange,
  addValue,
  onEmailChange,
  emailValue,
  onPhoneChange,
  phoneValue,
}) {
  return (
    <section>
      <fieldset className="field">
        <legend>Personal Info</legend>
        <span className="fieldSpan">
          <label htmlFor="name">Name: </label>
          <input
            onChange={onNameChange}
            value={nameValue}
            type="text"
            name=""
            id="name"
          />
        </span>
        <span className="fieldSpan">
          <label htmlFor="address">Adress: </label>
          <input
            onChange={onAddressChange}
            value={addValue}
            type="text"
            name=""
            id="address"
          />
        </span>
        <span className="fieldSpan">
          <label htmlFor="email">Email: </label>
          <input
            onChange={onEmailChange}
            value={emailValue}
            type="email"
            name=""
            id="email"
          />
        </span>
        <span className="fieldSpan">
          <label htmlFor="phone">Phone: </label>
          <input
            onChange={onPhoneChange}
            value={phoneValue}
            type="tel"
            name=""
            id="phone"
          />
        </span>
      </fieldset>
    </section>
  );
}

function PersonalContainer({ name, address, email, phone }) {
  return (
    <div className="personalInfoContainer">
      <h2>{name}</h2>
      <div className="contacts">
        {address !== "" && (
          <span>
            <i class="bi bi-geo-alt"></i>
            {address}
          </span>
        )}
        {email !== "" && (
          <span>
            <i class="bi bi-envelope"></i>
            <a href="#">{email}</a>
          </span>
        )}
        {phone !== "" && (
          <span>
            <i class="bi bi-telephone"></i>
            {phone}
          </span>
        )}
      </div>
    </div>
  );
}

export { PersonalInputs, PersonalContainer };
