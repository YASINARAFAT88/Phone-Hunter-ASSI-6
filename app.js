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

// Display Result
const displayResult = phones =>{
    const allPhone = phones.data.slice(0,20)
    const displayCard = document.getElementById('display-card')
    displayCard.textContent ='';

  allPhone.forEach(phone => {
    // console.log(phone)

    const div = document.createElement('div')
  div.classList.add('col')
  div.classList.add('mb-3')
  div.classList.add('shadow')
  div.classList.add('p-3')
  div.innerHTML=`
    <div class="card h-100 w-80">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${phone.phone_name}</h3>
                  <h5 class="card-title fw-bold">${phone.brand}</5>
                  <p class="card-text">${phone.slug}</p>
                </div>
                <div class="card-footer bg-white">
                   <button onclick="detailByClick('${phone.slug}')" class="bg-secondary text-white border border-rounded w-100 fw-bold">See Detail</button>
                </div>
              </div>
        `
        displayCard.appendChild(div)
   
    });
  }

  // Load Button
const detailByClick = phoneId =>{
  console.log('click by', phoneId);
  fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)

  .then(res => res.json())
  .then(data => displaySigleCard(data.data))
}

// Single Result By Click Button

const displaySigleCard = phoneId =>{
  console.log(phoneId)
  const phoneDetail = document.getElementById('phone-detaile')
  const div = document.createElement('div')
  phoneDetail.innerHTML='';
  div.classList.add('card')
  // div.classList.add('w-50')
  div.classList.add('mb-3')
  div.classList.add('shadow')
  div.classList.add('p-3')
  div.innerHTML =`
  <img src="${phoneId.image}" class="card-img-top w-50 mx-auto" alt="...">
          <div class="card-body">
            <h3 class="card-title">${phoneId.name}</h3>
            <h5 class="card-title">${phoneId.brand}</h5>
            <p class="card-text">${phoneId.releaseDate}</p>
            <h4 class="card-title text-primary">main features</h4>
            <p><span class="fw-bold">chipSet:</span> ${phoneId.mainFeatures.chipSet}</p>
            <p><span class="fw-bold">displaySize:</span> ${phoneId.mainFeatures.displaySize}</p>
            <p><span class="fw-bold">memory:</span> ${phoneId.mainFeatures.memory}</p>
          </div>
        </div>
  ` 
  phoneDetail.appendChild(div)
  
}
    
