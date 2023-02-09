import React from 'react';
import { useState } from 'react';
function GetStartForm() {

    const [selectedProjectType, setSelectedProjectType] = useState('Project Type');
    
    async function handleOnSubmit(e){
   
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
        if( !field.name ) return;
        formData[field.name] = field.value;
    })
    fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
    })
    .then((res) => {

        if(res.status === 200){ 
            const success = document.querySelector('#success');
            success.innerHTML = "<p>Your message was sent successful</p><br/>";

           //clear the form
           document.querySelector('#name').value = "";
           document.querySelector('#email').value = "";
           document.querySelector('#projecttype').value = "";
           document.querySelector('#phone').value = "";
           document.querySelector('#zip').value = "";
          
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

    <div id="form-section" className=" bg-truwinblue-900">
      <div id="form-getstarted-wrapper" className="px-5 py-10 mt-20 text-white md:flex md:flex-wrap mx-auto lg:max-w-6xl">

        <h2 className="font-[Cigars-Semibold] text-3xl md:hidden">Get started on your free exteriors estimate.</h2>

        <div id="form-getstarted-info" className="max-w-[50%] hidden md:block pl-5" >
              <h2 className="font-[Cigars-Semibold] text-2xl md:pr-4 md:w-full md:text-4xl">Get started on your free exteriors estimate.</h2>

              <div className="flex mt-8 md:mt-28">
                
                <div className="flex sx:max-w-[440px]" >
                    <div className="w-1/12">
                        <img src="/images/truwin-shield.png" alt="" className="w-6 mx-auto align-middle md:py-2" />
                    </div>
                    <div className="w-11/12">
                        <p className="text-[11px] pt-2 md:pl-2"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
                    </div>
                </div>

              </div>

        </div>
          
        <div id="form-getstarted" className='mx-auto md:w-[40%]'>
        <span className="text-green-600 font-bold md:py-4" id="success"></span>
        <span className="text-red-600 font-bold py-4" id="error"></span>
            <form 
                
                method="post" 
                className="grid gap-3 grid-cols-2 my-10 md:my-0"
                onSubmit={handleOnSubmit}
                >
                <input id="name" required name="yname" placeholder="Your Name" type="text" className="rounded col-span-2 p-4 text-truwinblue-700 text-sm placeholder:text-truwinblue-700" />

                <input id="email"  required name="email" placeholder="Email Address" type="text" className="rounded p-4 text-truwinblue-700 text-sm placeholder:text-truwinblue-700" />

               

                <select id="projecttype" name="projecttype" className="rounded p-4 text-truwinblue-700 text-sm placeholder:text-truwinblue-700" style={{"color": "#7B8EBE"}}>
                    <option value="" disabled selected className="text-truwinblue-300">Project Type</option>
                    <option value="Replacement">Replacement</option>
                    <option value="New Construction">New Construction</option>
                </select>

                <input id="phone" name="phone" placeholder="Phone Number" type="text" className="rounded p-2 text-truwinblue-700 text-sm placeholder:text-truwinblue-700" />

                <input id="zip" name="zip" placeholder="Zip Code" type="text" className="rounded p-4 text-truwinblue-700 text-sm placeholder:text-truwinblue-700" />
                
                <button type="submit" className="bg-truwinblue-300 px-8 py-5 col-span-2 rounded">Request Free Consultation</button>
            </form>
        
        </div>
    
          <div id="form-getstarted-info" className="flex sx:max-w-[435px]  md:hidden" >
              <div className="w-1/6">
                  <img src="/images/truwin-shield.png" alt="" className="w-10 mx-auto align-middle py-2" />
              </div>
              <div className="w-5/6">
                  <p className="text-[11px] pt-2 pl-2"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
              </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default GetStartForm