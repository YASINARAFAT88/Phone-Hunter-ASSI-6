const searchButton = () =>{
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value
    console.log(searchValue)

  
    searchField.value='';
    

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(phones => displayResult(phones))
}

const displayResult = phones =>{
    const allPhone = phones.data
  allPhone.forEach(phone => {
    console.log(phone)

    const displayCard = document.getElementById('display-card')

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
                   <button onclick="detailByClick()" class="bg-secondary text-white border border-rounded w-100" >See Detail</button>
                </div>
              </div>
        `
        displayCard.appendChild(div)
   
    });
  }

    // for(const phone of allPhone){
    //   console.log(phone)
    // }

    // 
    // for(const phone of phones){
    //   console.log(phone.data)
    // }
      
    
