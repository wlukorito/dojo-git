console.log("Learning git");

// Below is a code snippet extracted from a validation logic
// TODO: 1. Run it and explain logic behind it
// TODO: 2. Refactor the validate function: combine errors declaration and assignments
//          move the `valid` logic into the return statement

// updated by a form on the UI
// The variable formModel, if the values placed is empty or of different value, after validation it should alert an error due it is false. this is achieved due to the return value.
const formModel = {
  publicId: "",
  name: "",
  description: "",
};

function validate() {
  const errors = {
    publicIdError: !!formModel.publicId ? "" : "Public id is required",
    nameError: !!formModel.name ? "" : "Name is required",
    descriptionError: !!formModel.description ? "" : "Description is required",
  };

  return {
    valid: !!Object.values(errors).find((value) => !!value),
    errors,
  };
}
