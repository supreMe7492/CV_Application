import "../styles/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CvContainer from "./cvContainer";
import { PersonalInputs, PersonalContainer } from "./personalInfo";
import { useState } from "react";
function App() {
  const [personalInfos, setPersonalInfos] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  function handleName(e) {
    setPersonalInfos({ ...personalInfos, name: e.target.value });
  }
  function handleAddress(e) {
    setPersonalInfos({ ...personalInfos, address: e.target.value });
  }
  function handleEmail(e) {
    setPersonalInfos({ ...personalInfos, email: e.target.value });
  }
  function handlePhone(e) {
    setPersonalInfos({ ...personalInfos, phone: e.target.value });
  }
  return (
    <>
      <CvContainer className="container formContainer">
        <PersonalInputs
          onNameChange={handleName}
          nameValue={personalInfos.name}
          onAddressChange={handleAddress}
          addValue={personalInfos.address}
          onEmailChange={handleEmail}
          emailValue={personalInfos.email}
          onPhoneChange={handlePhone}
          phoneValue={personalInfos.phone}
        />
      </CvContainer>
      <CvContainer className="container cvContainer">
        <PersonalContainer
          name={personalInfos.name}
          address={personalInfos.address}
          email={personalInfos.email}
          phone={personalInfos.phone}
        />
      </CvContainer>
    </>
  );
}

export default App;
