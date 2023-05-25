// import style from style.css file (required)
import './style.css';

// import the required functions from module
import {
  getMealData, populatedishes, addLike, getLikesData, diplayLikes, counter, diplayNumberOfItems,
} from './modules/functions.js';

// import popup function
import { openPopup } from './modules/popup.js';

// Getting data from the theMealDB API
const mealData = await getMealData();

// Getting data from the Involvement API function
const likesData = await getLikesData();

// Populating items in the home page
populatedishes(mealData);

// Getting and diplaying the number of items
const nbOfItems = await counter();
diplayNumberOfItems(nbOfItems);

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