// Create new promise and either resolve of reject based on boolean
// value supplied

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    else reject(new Error('The fake API is not working currently'));
  });
}
