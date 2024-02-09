
$(document).ready(function () {

    function toggleMode() {
        document.body.classList.toggle('dark-mode');


        let btn = document.getElementById('nuitModeBtn');
        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = 'Jour';
        } else {
            btn.textContent = 'Nuit';
        }
    }

    document.getElementById('nuitModeBtn').addEventListener('click', toggleMode);

    async function fetchData(){
        try{
            const response = await $.ajax({
                url: "https://titi.startwin.fr/products/type/burger",
                type: "GET",
                dataType: "json"
            });
            console.log(response);
            displayBurger(response)

        }catch(error){
           console.log(error); 
        }
    }
    fetchData()


    function displayBurger(burgers){
        burgers.forEach(burger =>{
            console.log(burger.image);
            // const imagePath = burger.image
            // .replace(/\\/g, '/')
            // console.log(imagePath);
    const card =`
    <div class="card me-5 col-md-4" style="width: 25rem;">
    <img src="./${burger.imageh}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${burger.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `   
    $("#root").append(card) 
            
 })
    }
}) // FIN DOCUMENT READY