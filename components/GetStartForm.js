import React from 'react'

function GetStartForm() {

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
    });

    //clear the form
   const getForm = document.querySelector("#form-getstarted input");
   forEach(getForm => {
        field.value = "";
    })

    //signal that the form was successfully sent  
}


  return (
    <>

    <div id="form-section" className=" bg-truwinblue-900">
      <div id="form-getstarted-wrapper" className="px-5 py-10 mt-20 text-white md:flex md:flex-wrap mx-auto lg:max-w-6xl">

        <h2 className="font-serif text-2xl md:hidden">Get started on your free exteriors estimate.</h2>

        <div id="form-getstarted-info" className="max-w-[50%] hidden md:block pl-5" >
              <h2 className="font-serif text-2xl md:pr-4 md:w-full lg:text-3xl">Get started on your free exteriors estimate.</h2>
              <div className="flex mt-8 lg:mt-20">
                  <div className="align-middle">
                      <img src="/images/truwin-shield.png" alt="" className="w-8 md:w-auto" />
                  </div>
                  <div className="px-8">
                      <p className="text-sm lg:text-lg"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
                  </div>
              </div>
        </div>
          
        <div id="form-getstarted" className='mx-auto md:w-[40%]'>
            <form 
                action="/api/get-started-form.js" 
                method="post" 
                className="grid gap-2 grid-cols-2 my-10 md:my-0"
                onSubmit={handleOnSubmit}
                >
                <input id="name" required name="yname" placeholder="Your Name" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input required name="email" placeholder="Email Address" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input required name="projecttype" placeholder="Project Type" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="phone" placeholder="Phone Number" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="zip" placeholder="Zip Code" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <button type="submit" className="bg-truwinblue-300 px-8 py-5 col-span-2 rounded">Request Free Consultation</button>
            </form>
        </div>
    
          <div id="form-getstarted-info" className="flex sx:max-w-[435px] sx:mx-auto md:hidden" >
              <div className="w-1/6">
                  <img src="/images/truwin-shield.png" alt="" className="w-10 align-middle py-3" />
              </div>
              <div className="w-5/6">
                  <p className="text-sm"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
              </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default GetStartForm