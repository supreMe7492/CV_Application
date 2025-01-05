import "../styles/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CvContainer from "./cvContainer";
import { PersonalInputs, PersonalContainer } from "./personalInfo";
import { EducationForm, EducationContainer } from "./education";
import { ExperienceForm, ExperienceContainer } from "./experiences";
import { handleArray, handleChange, handleRemove } from "./statefunc";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  const [personalInfos, setPersonalInfos] = useState({
    name: "John Doe",
    address: "123 Main Street, Springfield, USA",
    email: "johndoe@example.com",
    phone: "(123) 456-7890",
  });
  const [educations, setEducations] = useState([
    {
      id: 1,
      schoolName: "State University",
      schoolAddress: "789 College Avenue, Springfield, USA",
      course: "Bachelor of Science in Computer Science",
      startDate: "2015-09-05",
      endDate: "2019-01-05",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      instName: "Tech Solutions Inc.",
      instAddress: " 101 Innovation Way, Springfield, USA",
      description:
        "Developed and maintained web applications using JavaScript, React, and Node.js",
      startDate: "2020-01-05",
      endDate: "2025-01-05",
    },
  ]);
  const handleToggles = () => {
    setToggle(!toggle);
  };
  const handleEducations = () => {
    handleArray(setEducations, educations);
  };
  const handleExperiences = () => {
    handleArray(setExperiences, experiences);
  };
  const handleSchoolName = (id, e) => {
    handleChange(id, e, setEducations, educations, "schoolName");
  };
  const handleInstlName = (id, e) => {
    handleChange(id, e, setExperiences, experiences, "instName");
  };
  const handleDegree = (id, e) => {
    handleChange(id, e, setEducations, educations, "course");
  };
  const handleDescription = (id, e) => {
    handleChange(id, e, setExperiences, experiences, "description");
  };
  const handleSchoolAddress = (id, e) => {
    handleChange(id, e, setEducations, educations, "schoolAddress");
  };
  const handleInstAddress = (id, e) => {
    handleChange(id, e, setExperiences, experiences, "instAddress");
  };
  function handleStartDate(id, e) {
    handleChange(id, e, setEducations, educations, "startDate");
  }
  function handleInstStartDate(id, e) {
    handleChange(id, e, setExperiences, experiences, "startDate");
  }
  function handleEndDate(id, e) {
    handleChange(id, e, setEducations, educations, "endDate");
  }
  function handleInstEndDate(id, e) {
    handleChange(id, e, setExperiences, experiences, "endDate");
  }
  function handleDelete(id) {
    handleRemove(id, setEducations, educations);
  }

  function handleInstDelete(id) {
    handleRemove(id, setExperiences, experiences);
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
      {toggle ? (
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
          <ExperienceForm
            experiences={experiences}
            addExperience={handleExperiences}
            onNameChange={handleInstlName}
            onDescriptionChange={handleDescription}
            onAddressChange={handleInstAddress}
            onStartChange={handleInstStartDate}
            onEndChange={handleInstEndDate}
            delExperience={handleInstDelete}
          />
          <span className="save">
            <button onClick={handleToggles} type="btn">
              Save
            </button>
          </span>
        </CvContainer>
      ) : (
        <>
          <CvContainer className="container cvContainer">
            <PersonalContainer
              name={personalInfos.name}
              address={personalInfos.address}
              email={personalInfos.email}
              phone={personalInfos.phone}
            />
            <EducationContainer educations={educations} />
            <ExperienceContainer experiences={experiences} />
          </CvContainer>
          <span className="edit">
            <button onClick={handleToggles}>Edit</button>
          </span>
        </>
      )}
    </>
  );
}

export default App;
