export function fetchUsers(searchTerm) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => resolve(res.json()))
      .catch((error) => reject(error));
  });
}
