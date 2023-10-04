// A function that returns a promise that is resolved, creating new object.

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const signUp = {
      firstName,
      lastName,
    };
    resolve(signUp);
  });
}
