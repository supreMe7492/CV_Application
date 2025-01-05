import "../styles/input.css";
import "../styles/container.css";
function ExperienceForm({
  experiences,
  addExperience,
  delExperience,
  onNameChange,
  onDescriptionChange,
  onAddressChange,
  onStartChange,
  onEndChange,
}) {
  return (
    <fieldset className="parentField">
      <legend>Work Experiences</legend>
      {experiences.map((experience) => (
        <fieldset key={experience.id} className="field">
          <legend>Experience {experience.id}</legend>

          <span className="close">
            <i
              className="bi bi-x"
              onClick={() => delExperience(experience.id)}
            ></i>
          </span>

          <span className="fieldSpan">
            <label htmlFor="name">Institution: </label>
            <input
              value={experience.instName}
              onChange={(e) => onNameChange(experience.id, e)}
              placeholder="Enter the name of institution"
              type="text"
              name="name"
              id="name"
            />
          </span>
          <span className="fieldSpan">
            <label htmlFor="course">Description</label>
            <textarea
              value={experience.description}
              onChange={(e) => onDescriptionChange(experience.id, e)}
              placeholder="Enter Description"
              id="course"
            />
          </span>
          <span className="fieldSpan">
            <label htmlFor="address">Address</label>
            <input
              value={experience.instAddress}
              onChange={(e) => onAddressChange(experience.id, e)}
              placeholder="Enter Address of institution"
              type="text"
              name="address"
              id="address"
            />
          </span>
          <span className="fieldSpan">
            <input
              value={experience.startDate}
              onChange={(e) => onStartChange(experience.id, e)}
              type="date"
              name="name"
              id=""
            />
            -
            <input
              value={experience.endDate}
              onChange={(e) => onEndChange(experience.id, e)}
              type="date"
              name="name"
              id=""
            />
          </span>
        </fieldset>
      ))}
      <button onClick={addExperience}>Add Experience Field</button>
    </fieldset>
  );
}

function ExperienceContainer({ experiences }) {
  return (
    <div className="educationContainer">
      <span>Experiences</span>
      {experiences.map((experience) => (
        <div key={experience.id} className="detailsContainer">
          <div className="dateAdd">
            {experience.startDate && (
              <p>
                <i className="bi bi-calendar"></i> {experience.startDate} /{" "}
                {experience.endDate}
              </p>
            )}
            {experience.instAddress && (
              <p>
                <i className="bi bi-geo-alt"></i>
                {experience.instAddress}
              </p>
            )}
          </div>
          <div className="nameCourse">
            <h4>{experience.instName}</h4>
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export { ExperienceForm, ExperienceContainer };
