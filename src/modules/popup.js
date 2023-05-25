/* eslint-disable import/prefer-default-export */

import { postComment, getComment } from "./comment.js";

export const openPopup = (mealData, mealId) => {
  const id = mealId.replace('B', '');
  const popup = document.querySelector('.popup');
  popup.classList.add('show');
  mealData.forEach((element) => {
    if (element.idMeal === id) {
      popup.innerHTML = `
  <div class="content">
     <div id="close-btn" class="close-btn">&times;</div>
     <div class="img"><img src="${element.strMealThumb}" alt="${element.strMeal}" class="pop-img"></div>
     <h3>${element.strMeal}</h3>
     <p>${element.strInstructions}</p>
     <hr/>
     <br>
     <div class="display-comments">
            <h3>Comments <span id= "comments-count">0</span> </h3>
            <ul id="comments-list" class = "commentsUl"></ul>   
     </div>
      <h2 class="leave-comment">Leave A Comment </h2>
      <form class="cmnt-form" id="cmnt-form">
                    <input  name="name" placeholder="Your name">
                    <textarea placeholder="Your insights" name="comment" cols="20" rows="5"></textarea>
                    <button type="submit" class='submit-btn'>comment</button>
      </form>
  </div>`;
        const form = document.querySelector('.cmnt-form');
        form.addEventListener('submit', (e)=>{
          e.preventDefault();
          const name = document.querySelector('input').value;
          const commentMsg = document.querySelector('textarea').value;
          const cmntData ={
            item_id: mealId.toString(),
            username:name,
            comm:commentMsg
          };
          
          // form.reset();
          if(cmntData.username && cmntData.comm){
            postComment(cmntData);
          }
         
          getComment(mealId);

          // setTimeout(() => {
          //   window.location.reload();
          // },1000);
        });

      const closeBtn = document.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
      });
    }
  });
};


// export const addComment = async (targetId, username, comment) => {
//       const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments/');
//       await fetch(request, {
//         headers: {
//           'Content-type': 'application/json',
//         },
//         method: 'POST',
//         body: JSON.stringify({
//           item_id: targetId,
//           username: username,
//           comment: comment,
//         }),
//       });
//     };


// //Getting data from the Involvment

// export const getCommentData = async () => {
//     const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments/');
//     const response = await fetch(request);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   };