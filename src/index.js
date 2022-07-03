console.log("Learning git");

// Below is a code snippet extracted from a validation logic
// TODO: 1. Run it and explain logic behind it
// TODO: 2. Refactor the validate function: combine errors declaration and assignments
//          move the `valid` logic into the return statement

// updated by a form on the UI
const formModel = {
  publicId: "",
  name: "",
  description: "",
};

function validate() {
  const errors = {
    publicIdError: "",
    nameError: "",
    descriptionError: "",
  };

  errors.publicIdError = !!formModel.publicId ? "" : "Public id is required";
  errors.nameError = !!formModel.name ? "" : "Name is required";
  errors.descriptionError = !!formModel.description
    ? ""
    : "Description is required";

  const valid = !!Object.values(errors).find((value) => !!value);

  return {
    valid,
    errors,
  };
}
