function data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "ashamin", age: 23 });
    }, 3000);
  });
}
async function getData() {
  try {
    console.log("Fetching data....");
    let userData = await data();
    console.log(userData);
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
}
// getData();

function postData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is post Data");
    }, 2000);
  });
}

function commentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is comment Data");
    }, 3000);
  });
}

async function fetchingData() {
  try {
    console.log("Fetching the data....");
    // const post = await postData();
    // const comment = await commentData();

    const [post, comment] = await Promise.all([postData(), commentData()]);

    console.log(post);
    console.log(comment);
  } catch (error) {
    console.error("Something went Wrong", error);
  }
}
fetchingData();
