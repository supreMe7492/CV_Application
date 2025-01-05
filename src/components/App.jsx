import "../styles/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CvContainer from "./cvContainer";
import { PersonalInputs, PersonalContainer } from "./personalInfo";
import { EducationForm, EducationContainer } from "./education";
import { useState } from "react";
function App() {
  const [personalInfos, setPersonalInfos] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [educations, setEducations] = useState([
    {
      id: 1,
      schoolName: "",
      schoolAddress: "",
      course: "",
      startDate: "",
      endDate: "",
    },
  ]);
  function handleEducations() {
    setEducations([
      ...educations,
      {
        id: educations.length + 1,
        schoolName: "",
        schoolAddress: "",
        course: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function handleSchoolName(id, e) {
    setEducations(
      educations.map((item) =>
        item.id === id ? { ...item, schoolName: e.target.value } : { ...item }
      )
    );
  }
  function handleDegree(id, e) {
    setEducations(
      educations.map((item) =>
        item.id === id ? { ...item, course: e.target.value } : { ...item }
      )
    );
  }
  function handleSchoolAddress(id, e) {
    setEducations(
      educations.map((item) =>
        item.id === id
          ? { ...item, schoolAddress: e.target.value }
          : { ...item }
      )
    );
  }
  function handleStartDate(id, e) {
    setEducations(
      educations.map((item) =>
        item.id === id ? { ...item, startDate: e.target.value } : { ...item }
      )
    );
  }
  function handleEndDate(id, e) {
    setEducations(
      educations.map((item) =>
        item.id === id ? { ...item, endDate: e.target.value } : { ...item }
      )
    );
  }
  function handleDelete(id) {
    const newEducations = educations
      .filter((education) => id !== education.id)
      .map((item, index) => ({ ...item, id: index + 1 }));

    setEducations([...newEducations]);
  }
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
        <EducationForm
          educations={educations}
          addEducation={handleEducations}
          delEducation={handleDelete}
          onNameChange={handleSchoolName}
          onAddressChange={handleSchoolAddress}
          onDegreeChange={handleDegree}
          onStartChange={handleStartDate}
          onEndChange={handleEndDate}
        />
      </CvContainer>
      <CvContainer className="container cvContainer">
        <PersonalContainer
          name={personalInfos.name}
          address={personalInfos.address}
          email={personalInfos.email}
          phone={personalInfos.phone}
        />
        <EducationContainer educations={educations} />
      </CvContainer>
    </>
  );
}

export default App;
