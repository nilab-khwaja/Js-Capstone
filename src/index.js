// import style from style.css file (required)
import './style.css';

// import the required functions from module
import {
  getMealData, populatedishes, addLike, getLikesData, diplayLikes
} from './modules/functions.js';

// import popup function
import { openPopup} from './modules/popup.js';

// Getting data from the theMealDB API
const mealData = await getMealData();

// Getting data from the Involvement API function
const likesData = await getLikesData();

// Populating items in the home page
populatedishes(mealData);
// Diplaying likes data in the home page
mealData.forEach((element) => {
  diplayLikes(likesData, `M${element.idMeal}`);
});

const foodListSection = document.querySelector('.food-list');
foodListSection.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target && e.target.matches('i.heart')) {
    const targetId = e.target.id;
    await addLike(targetId);
    const likesData = await getLikesData();
    diplayLikes(likesData, targetId);
  }
});

// add evenlistner for popup window
foodListSection.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target && e.target.matches('button.comment')) {
    const targetId = e.target.id;
    openPopup(mealData, targetId);
  }
});


// async function createApp() {
// const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//   method: 'POST'
//    });
//   const data = await response.json();
//   return data.id;
//   }
  
//   createApp().then(id => console.log(id)); // example usage
  


// //const gameId = 'kNNyqMjEaTbbcG78RkKA';
// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

// // fetching the gameID from server

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data.result));







//const app_id = "R20mJzx45L3RyqatiuEZ";
// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments/';

// const data = 
//   {
//     "item_id": "item1",
//     "username": "Jane",
//     "comment": "Hello"
// }


// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers:{
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));
