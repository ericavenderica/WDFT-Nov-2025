function sayHello(callback) {
  console.log("say hello");
  callback();
}
function sayGoodbye() {
  console.log("bye");
}
setTimeout(() => {
  //   sayHello(sayGoodbye);
}, 1000);

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

function getDirections(step, callback, errorCallback) {
  const theStep = directions[step];
  if (!theStep) {
    errorCallback();
  } else {
    callback(theStep);
  }
}
// getDirections(0, ()=>{
//     // do some thing fancy
//     getDirections(1,()=>{},()=>{})
// }, ()=>{})
// Single callback
// getDirections(
//   0,
//   (data) => {
//     console.log(data);
//     getDirections(
//       1,
//       (data2) => {
//         console.log(data2);
//         getDirections(
//           2,
//           (data3) => {
//             console.log(data3);
//             getDirections(
//               3,
//               (data4) => {
//                 console.log(data4);
//               },
//               () => {
//                 console.log("incorrect format");
//               }
//             );
//           },
//           () => {
//             console.log("incorrect format");
//           }
//         );
//       },
//       () => {
//         console.log("incorrect format");
//       }
//     );
//   },
//   () => {
//     console.log("incorrect format");
//   }
// );

//**************promises***********
//creating a promise
const ourPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    const theDataWeFound = "blah blah blah";
    resolve(theDataWeFound);
  } else {
    reject("obv 2 + 2 does not equal 5");
  }
});
const ourPromise2 = new Promise((resolve, reject) => {
  if (3 + 3 === 6) {
    resolve("nice math, its 6");
  } else {
    reject("go back school");
  }
});
const ourPromise3 = new Promise((resolve, reject) => {
  if (3 + 3 === 6) {
    resolve("this is the third promise");
  } else {
    reject("go back school");
  }
});
//consuming a promise with .then and .catch
// ourPromise
//   .then((data) => {
//     console.log("Heres the data", data);
//   })
//   .catch((error) => {
//     console.log("something bad happened ", error);
//   })
//   .finally(() => {
//     console.log("this happens always");
//   });

//consuming a promise with async and await
//with an arrow function
const useOurPromise2 = async () => {
  // async function useOurPromise2() {
  try {
    const response = await ourPromise2;
    const response2 = await ourPromise3;
    console.log(response);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally a break");
  }
};
// useOurPromise2();

// ***************Promise.all()***************
const arrayOfPromises = [ourPromise, ourPromise2, ourPromise3];
// Promise.all(arrayOfPromises)
//   .then((responseToPromiseAll) => {
//     console.log(responseToPromiseAll);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//live example asking for data from an api
async function getRickAndMortyChars() {
  try {
    const responseFromRickAndMorty = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const data = await responseFromRickAndMorty.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getRickAndMortyChars();

//with .then and .catch
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch((err) => console.log(err));
