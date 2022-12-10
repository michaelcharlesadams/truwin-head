
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
           const reply = document.querySelector('#reply');
           reply.innerHTML = "Your message was sent successful";

           //clear the form
           document.querySelector('#interest').value = "";
           document.querySelector('#fullname').value = "";
           document.querySelector('#phone').value = "";
           document.querySelector('#email').value = "";
           document.querySelector('#projecttype').value = "";
           document.querySelector('#zip').value = "";
           document.querySelector('#message').value = "";
          
        }else{
            const reply = document.querySelector('#reply');
            reply.innerHTML = "Oh no, something went wrong. Try again";
            //reply.innerHTML = "Oh no, something went wrong. try again or give us a call(832) 777-3681.";
        } 

        
        })
        .catch((err) => {console.log(err)});
    
    }

  return (
    <>
     <div id="form-getstarted" className='mx-auto'>
        <p className="text-white md:pb-4">Book a visit by contacting us below.</p>
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
            <p className="text-white font-bold" id="reply"></p>
        </div>
    </>
  )
}

export default GetPricingForm