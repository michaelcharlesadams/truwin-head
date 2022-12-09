

function GetPricingForm() {
  return (
    <>
     <div id="form-getstarted" className='mx-auto'>
        <p className="text-white md:pb-4">Book a visit by contacting us below.</p>
            <form 
                action="/api/get-started-form.js" 
                method="post" 
                className="grid gap-3 grid-cols-2 my-10 md:my-0"
                >
                <input id="interest" required name="interest" placeholder="What are you interested in?" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input required name="projecttype" placeholder="Project Type" type="text" className="rounded p-2 text-truwinblue-500 text-sm  col-span-2 placeholder:text-truwinblue-300" />

                <input id="name" required name="fullname" placeholder="Full Name" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input required name="email" placeholder="Email Address" type="text" className="rounded p-2 text-truwinblue-500 text-sm col-span-2 placeholder:text-truwinblue-300" />

                <input name="phone" placeholder="Phone Number" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input name="zip" placeholder="Zip Code" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <input name="message" placeholder="Message" type="textarea" className="rounded p-2  col-span-2 h-20 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />

                <button type="submit" className="bg-truwinblue-300 py-5 rounded text-white">Book a Service</button>
            </form>
        </div>
    </>
  )
}

export default GetPricingForm