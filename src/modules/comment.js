const commentURl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R20mJzx45L3RyqatiuEZ/comments/";

 export const postComment = async (data) => {
    await fetch (commentURl,{
        method:'POST',
        body: JSON.stringify(data) , 
            headers: {
                'Content-type': 'application/json',
            },
        });
    };


    export const getComment = async (cmnt) => {
        const getUrl = `?item_id=${cmnt}`;
        const commentResponse = await fetch(commentURl + getUrl);
        const data = await commentResponse.json();
        console.log(data);
        return data;
        
      };
  