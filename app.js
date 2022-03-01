const searchButton = () =>{
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value
    console.log(searchValue)

    // Data Clear 
    searchField.value='';
    // Load Data 
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(phones => displayResult(phones))
}

const displayResult = phones =>{
    const allPhone = phones.data
    const displayCard = document.getElementById('display-card')
    displayCard.textContent ='';
  // if(phones == 0){
    
  // }
  allPhone.forEach(phone => {
    // console.log(phone)

    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
    <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${phone.phone_name}</h3>
                  <h5 class="card-title fw-bold">${phone.brand}</5>
                  <p class="card-text">${phone.slug}  additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer bg-white">
                   <button onclick="detailByClick('${phone.slug}')" class="bg-secondary text-white border border-rounded w-100">See Detail</button>
                </div>
              </div>
        `
        displayCard.appendChild(div)
   
    });
  }

const detailByClick = phoneId =>{
  console.log('click by', phoneId);
  fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)

  .then(res => res.json())
  .then(data => console.log(data))
}
      
    
