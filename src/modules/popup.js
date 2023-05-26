export const openPopup = (mealData, mealId) => {
  const id = mealId.replace('B', '');
  const popup = document.querySelector('.popup');
  popup.classList.add('show');
  mealData.forEach((element) => {
    if (element.idMeal === id) {
      popup.innerHTML = `
<div class="container">
  <div class="content">
     <div class = "right">
     <div id="close-btn" class="close-btn">&times;</div>
     <div class="img"><img src="${element.strMealThumb}" alt="${element.strMeal}" class="pop-img">
     <h3>${element.strMeal}</h3>
     </div>
     <div class= "food-instruction">
     <h2>Instruction</h2>
     <p>${element.strInstructions}</p>
     </div>
     </div>
     <hr/>
     <br>
     <div class = "left">
     <div class="display-comments flex-column">
            <h2 class = "comment-title" ></h2>
            <ul id="comments-list" class = "commentsUl"></ul>   
     </div>
        <div class = "form-section">
          <h2 class="leave-comment">Leave A Comment </h2>
          <form class="cmnt-form" id="cmnt-form">
                        <input required class = "user-name" name="name" placeholder="Your name">
                        <p class = "user-name-error"></p>
                        <textarea required  class = "insights" placeholder="Your insights" name="comment" cols="20" rows="5"></textarea>
                        <p class = "insights-error"></p>
                        <button type="submit" class='submit-btn'>comment</button>
          </form>
        </div>
      </div>
  </div>
</div>`;
      const closeBtn = document.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
      });
    }
  });
};

// Getting comment data from the Involvement API function
export const getCommentData = async (id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

// populating comment data function
export const populateComments = (data) => {
  const commentsBox = document.getElementById('comments-list');
  data.forEach((element) => {
    if (element.creation_date && element.username && element.comment) {
      const li = document.createElement('li');
      li.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsBox.appendChild(li);
    }
  });
};
// Throw error message function
export const errorMsg = (userName, insights) => {
  const p1 = document.querySelector('p.user-name-error');
  const p2 = document.querySelector('p.insights-error');
  if (!userName) {
    p1.innerHTML = 'required field';
    p1.style.color = 'red';
    p1.style.fontSize = '0.9rem';
  } else {
    p1.innerHTML = '';
  }
  if (!insights) {
    p2.innerHTML = 'required field';
    p2.style.color = 'red';
    p2.style.fontSize = '0.9rem';
  } else {
    p2.innerHTML = '';
  }
};
// Add comment to API function
export const addComment = async (id, userName, insights) => {
  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments');
  await fetch(request, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName,
      comment: insights,
    }),
  });
};

// counter comment function
export const commentcounter = async (id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  // Since some data objects are empty:
  let n = 0;
  if (data.length) {
    data.forEach((element) => {
      if (element.creation_date && element.username && element.comment) {
        n += 1;
      }
    });
  }
  return n;
};

// Display the number of comment on the popup window function
export const diplayNumberOfComments = (nbOfItems) => {
  const h2 = document.querySelector('h2.comment-title');
  h2.textContent = `comments (${nbOfItems})`;
};