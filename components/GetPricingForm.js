
function GetPricingForm() {


    async function handleOnSubmit(e){
        //stop the default
        e.preventDefault();
        const formData = {};
    
        //grab the data fields
        Array.from(e.currentTarget.elements).forEach(field => {
            if( !field.name ) return;
            formData[field.name] = field.value;
        })

        //try to send the message
        fetch('/api/mail-pricing', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        .then((res) => {

        if(res.status === 200){ 
           const success = document.querySelector('#success');
           success.innerHTML = "<p>Your message was sent successful</p><br/>";

           //clear the form
           document.querySelector('#interest').value = "";
           document.querySelector('#fullname').value = "";
           document.querySelector('#phone').value = "";
           document.querySelector('#email').value = "";
           document.querySelector('#projecttype').value = "";
           document.querySelector('#zip').value = "";
           document.querySelector('#message').value = "";
          
        }else{
            const error = document.querySelector('#error');
            error.innerHTML = "<p>Oh no, something went wrong. Try again</p><br/>";
            //reply.innerHTML = "Oh no, something went wrong. try again or give us a call(832) 777-3681.";
        } 

        
        })
        .catch((err) => {console.log(err)});
    
    }

  return (
    <>
     <div id="form-getstarted" className='mx-auto'>
        <p className="text-white md:pb-4">Book a visit by contacting us below.</p>
            <span className="text-green-600 font-bold md:py-4" id="success"></span>
            <span className="text-red-600 font-bold py-4" id="error"></span>
            <form 
                
                method="post" 
                className="grid gap-3 grid-cols-2 my-10 md:my-0"
                onSubmit={handleOnSubmit}
                >
                <input id="interest" required name="interest" placeholder="What are you interested in?" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input id="projecttype" required name="projecttype" placeholder="Project Type" type="text" className="rounded p-2 text-truwinblue-500 text-sm  col-span-2 placeholder:text-truwinblue-300" />

                <input id="fullname" required name="fullname" placeholder="Full Name" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input id="email" required name="email" placeholder="Email Address" type="text" className="rounded p-2 text-truwinblue-500 text-sm col-span-2 placeholder:text-truwinblue-300" />

                <input id="phone" name="phone" placeholder="Phone Number" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input id="zip" name="zip" placeholder="Zip Code" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input id="message" name="message" placeholder="Message" type="textarea" className="rounded p-2  col-span-2 h-20 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <button type="submit" className="bg-truwinblue-300 py-5 rounded text-white">Book a Service</button>
            </form>
            
        </div>
    </>
  )
}

export default GetPricingForm