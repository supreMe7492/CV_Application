function handleArray(setter, array) {
  setter([
    ...array,
    {
      id: array.length + 1,
      schoolName: "",
      schoolAddress: "",
      course: "",
      startDate: "",
      endDate: "",
    },
  ]);
}

function handleChange(id, e, setter, array, key) {
  setter(
    array.map((item) =>
      item.id === id ? { ...item, [key]: e.target.value } : { ...item }
    )
  );
}

function handleRemove(id, setter, array) {
  const newArray = array
    .filter((data) => id !== data.id)
    .map((item, index) => ({ ...item, id: index + 1 }));

  setter([...newArray]);
}

export { handleArray, handleChange, handleRemove };
