// let baseURL = "http://api.animalinfo.org/data/?animal=";
let baseURL = "http://localhost:3000/fakeAnimalData/?animal=";

let apiKey = "&appid=9f15e45060...";

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  const newAnimal = document.getElementById("animal").value;
  const fav = document.getElementById("favorite").value;
  getAnimal(baseURL, newAnimal, apiKey).then(function (data) {
    console.log(data);
    postData("/addAnimal", {
      animal: data.animal,
      fact: data.fact,
      fav: fav,
    });
    // we can do this because of Async!
    updateUI();
  });
}
const getAnimal = async (baseURL, animal, key) => {
  const res = await fetch(baseURL + animal + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    // appropriately handle the error
    console.log("error", error);
  }
};
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("animalName").innerHTML = allData[0].animal;
    document.getElementById("animalFact").innerHTML = allData[0].facts;
    document.getElementById("animalFav").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
