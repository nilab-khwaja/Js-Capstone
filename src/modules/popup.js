export const openPopup = (mealData, mealId)=> {
    const id = mealId.replace('B', '');
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
    mealData.forEach(element => {
      if(element.idMeal === id){
        popup.innerHTML = `
    <div class="content">
        <div id="close-btn" class="close-btn">&times;</div>
        <div class="img"><img src="${element.strMealThumb}" alt="${element.strMeal}" class="pop-img"></div>
        <h3>${element.strMeal}</h3>
        <p>${element.strInstructions}</p>
      </div>`;
         
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
    });
    

    
      };
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    popup.style.top = (scrollTop + 100) + 'px';  
    });

    
       
};

