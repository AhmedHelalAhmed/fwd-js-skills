const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const retrieveData = async (url = "") => {
  const response = await fetch(url);
  try {
    // Transform into JSON
    const allData = await response.json();
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

postData("/addMovie", { movie: "the matrix", score: 5 });
postData("/addMovie", { movie: "pitch perfect", score: 4.5 });
// postData("/add", { answer: 42 });
