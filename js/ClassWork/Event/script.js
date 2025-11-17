
        const form = document.querySelector('#companyForm')
        const cards = document.querySelector('#preview')


        // fetching the input fields so that we can add event listener to them to fetch details
        const inContent = document.querySelector('#moto')
        const inPicture = document.querySelector('#picture')
        const submit = document.querySelector('#submit')
        const inHeading = document.querySelector('#companyName')
       
        

        submit.addEventListener('click',e=>{
            e.preventDefault();

        // create new elements for each card     
        const cardBody = document.createElement('div')
        cardBody.className='card_body'

        const addInputHeading = document.createElement('h3')
        const addInputContent = document.createElement('p')
        const addInputPicture = document.createElement('img')

        if(
            inHeading.value === ''||
            inContent.value === ''||
            inPicture.value === ''
        ){
            alert('⚠️ Please fill in all fields before saving!');
            return;
        }

        else{
        // add details from input
            addInputHeading.textContent = inHeading.value;
            addInputContent.textContent = inContent.value;
            addInputPicture.src = inPicture.value; 

        // append all parts of body into body
            cardBody.appendChild(addInputHeading)
            cardBody.appendChild(addInputContent)
            cardBody.appendChild(addInputPicture)
        
        // append card in my website
            cards.appendChild(cardBody)

        // reset form fields
            form.reset();
        
            }
        }
    )
        
       