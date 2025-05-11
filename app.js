const cl = console.log;
const productList = document.getElementById('productList');
const loader = document.getElementById('loader');

let baseURL = 'https://ecom-backend-tq7w.onrender.com';
const postURL  = `${baseURL}/products`;

const createCards = (arr) => {
       let result = '';
       arr.forEach(ele => {
              result += ` <div class="col-md-3">
            <div class="card my-2">
                <figure class="productCard">
                    <img src="${ele.images}" alt='${ele.title}' title='${ele.title}'>
                    <figcaption class="icons">
                   <ul>
                      <li><i class="fa-solid fa-thumbs-up fa-2x"></i></li>
                      <li><i class="fa-solid fa-heart fa-2x" onclick='onClick(this)'></i></li>
                      <li><i class="fa-solid fa-eye fa-2x"></i></li>                    
                    </ul> 
                  </figcaption> 
                </figure>
            </div>
                <div class="productInfo mb-5">
                  <span>${ele.subcategory}</span>
                  <h5 class='m-0'>${ele.title}</h5>
                  <small>${ele.total_price}</small>              
                </div>               
           </div>`
       });
       productList.innerHTML = result;
}

const onClick = (ele) => {
  ele.style.color = 'red'
}

const fetchProduct = () => {
  loader.classList.remove('d-none');
       fetch(postURL)
       .then(res => {
        return res.json()
       })
       .then(res => {
        cl(res);
        createCards(res)
       })
       .catch(err => {
        cl(err)
       })
       .finally(() => 
      loader.classList.add('d-none')
      )
}
fetchProduct();