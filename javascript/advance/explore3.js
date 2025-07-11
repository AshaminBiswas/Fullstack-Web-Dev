function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve(`the data fetching successfully`, {
          name: "ashamin",
          age: 23,
          status: "ok 200",
        });
      } else {
        reject("Oops Something went Wrong", {
          error: "lol",
          status: "bad request 400",
        });
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
