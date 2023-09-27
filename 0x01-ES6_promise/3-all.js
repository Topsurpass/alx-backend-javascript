// A funtion that returns / Collectively resolves all promises created
import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    // all promises have been resolved successfully
    .then((result) => {
      const output = `${result[0].body} ${result[1].firstName} ${result[1].lastName}`;
      console.log(output);
    })
    // Catch error if atleast one of the promise fails or rejects
    .catch(() => console.log('Signup system offline'));
}
