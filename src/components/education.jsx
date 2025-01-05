import "../styles/input.css";
import "../styles/container.css";
function EducationForm({
  educations,
  addEducation,
  delEducation,
  onNameChange,
  onDegreeChange,
  onAddressChange,
  onStartChange,
  onEndChange,
}) {
  return (
    <fieldset className="parentField">
      <legend>Educations</legend>
      {educations.map((education) => (
        <fieldset key={education.id} className="field">
          <legend>Education {education.id}</legend>

          <span className="close">
            <i
              className="bi bi-x"
              onClick={() => delEducation(education.id)}
            ></i>
          </span>

          <span className="fieldSpan">
            <label htmlFor="name">School: </label>
            <input
              value={education.schoolName}
              onChange={(e) => onNameChange(education.id, e)}
              placeholder="Enter the name of school/university"
              type="text"
              name="name"
              id="name"
            />
          </span>
          <span className="fieldSpan">
            <label htmlFor="course">Degree</label>
            <input
              value={education.course}
              onChange={(e) => onDegreeChange(education.id, e)}
              placeholder="Enter Degree or field of study"
              type="text"
              name="course"
              id="course"
            />
          </span>
          <span className="fieldSpan">
            <label htmlFor="address">Address</label>
            <input
              value={education.schoolAddress}
              onChange={(e) => onAddressChange(education.id, e)}
              placeholder="Enter Address of school/university"
              type="text"
              name="address"
              id="address"
            />
          </span>
          <span className="fieldSpan">
            <input
              value={education.startDate}
              onChange={(e) => onStartChange(education.id, e)}
              type="date"
              name="name"
              id=""
            />
            -
            <input
              value={education.endDate}
              onChange={(e) => onEndChange(education.id, e)}
              type="date"
              name="name"
              id=""
            />
          </span>
        </fieldset>
      ))}
      <button onClick={addEducation}>Add Education Field</button>
    </fieldset>
  );
}

function EducationContainer({ educations }) {
  return (
    <div className="educationContainer">
      <span>Educations</span>
      {educations.map((education) => (
        <div key={education.id} className="detailsContainer">
          <div className="dateAdd">
            {education.startDate && (
              <p>
                <i className="bi bi-calendar"></i> {education.startDate} /{" "}
                {education.endDate}
              </p>
            )}
            {education.schoolAddress && (
              <p>
                <i className="bi bi-geo-alt"></i>
                {education.schoolAddress}
              </p>
            )}
          </div>
          <div className="nameCourse">
            <h4>{education.schoolName}</h4>
            <p>{education.course}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export { EducationForm, EducationContainer };
