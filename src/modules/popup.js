import { postComment, getComment, displayComments } from "./comment.js";

export const openPopup = (mealData, mealId) => {
  const id = mealId.replace("B", "");
  const popup = document.querySelector(".popup");
  popup.classList.add("show");
  mealData.forEach((element) => {
    if (element.idMeal === id) {
      popup.innerHTML =`
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
     <div class="display-comments">
            <h3>Comments <span id= "comments-count">0</span> </h3>
            <ul id="comments-list" class = "commentsUl"></ul>   
     </div>
        <div class = "form-section">
          <h2 class="leave-comment">Leave A Comment </h2>
          <form class="cmnt-form" id="cmnt-form">
                        <input required name="name" placeholder="Your name">
                        <textarea required placeholder="Your insights" name="comment" cols="20" rows="5"></textarea>
                        <button type="submit" class='submit-btn'>comment</button>
          </form>
        </div>
      </div>
  </div>`;
      const form = document.querySelector(".cmnt-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("input").value;
        const commentMsg = document.querySelector("textarea").value;
        const cmntData = {
          item_id: mealId.toString(),
          username: name,
          comment: commentMsg,
        };

        // form.reset();
        postComment(cmntData).then(async () => {
          const comments = await getComment(mealId)
          const prevComments = await getComment(mealId);
            displayComments(comments,prevComments);
        });

        // setTimeout(() => {
        //   window.location.reload();
        // },1000);
      });

      const closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
      });
    }
  });
};
