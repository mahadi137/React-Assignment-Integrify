const API = "https://jsonplaceholder.typicode.com/users";

async function Data() {
  return new Promise((resolve, reject) =>
    fetch(API)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  );
}
export default Data;
