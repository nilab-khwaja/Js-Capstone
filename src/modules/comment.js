const commentURl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments";

export const postComment = async (data) => {
  console.log(data);
  await fetch(commentURl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  });
};

export const getComment = async (cmnt) => {
  const getUrl = `?item_id=${cmnt}`;
  const commentResponse = await fetch(commentURl + getUrl);
  const data = await commentResponse.json();
  return data;
};


// export const displayComments = (data) => {
//     const commentsUl = document.getElementById("comments-list");
//     commentsUl.innerHTML = '';
//     console.log(commentsUl);
//     data.forEach((comment) => {
//       const li = document.createElement("li");
//       li.textContent = `${comment.username}: ${comment.comment}`;
//       commentsUl.appendChild(li);
//     });
//   };
  
export const displayComments = (data, prevComments = []) => {
  const commentsUl = document.getElementById("comments-list");
  commentsUl.innerHTML = '';

  // Combine previous and new comments
  const allComments = [...prevComments, ...data];

  allComments.forEach((comment) => {
    const li = document.createElement("li");
    li.textContent = `${comment.username} : ${comment.comment}`;
    commentsUl.appendChild(li);
  });
};