function Header() {
  
  return (
  <>
    <div className="lg:hidden">
        <div className="flex justify-between bg-softblue-primary px-4 py-2 mx-5 mt-3">
            <p className="text-truwinblue-900 font-graphikSemibold text-sm">Call for an estimate:</p> 
            <p className="text-truwinblue-900 font-graphikSemibold text-sm">(832) 777-3681</p>
        </div>
        <div className="hidden">
            <p>Call or Text 832-555-5555</p>
        </div>
    </div>

    <div className="max-w-6xl mx-auto">
        <div className="lg:flex md:hidden hidden bg-softblue-primary justify-between px-4 py-2 mx-5">
            <div className="flex">
                <p className="text-truwinblue-900 text-sm"><span className="font-graphikSemibold">Current Special Rate:</span> <span className="font-graphik">20% OFF All Windows. Available until August 15th.</span></p> 
            </div>
            <div className="flex">
                <p className="text-truwinblue-700 text-sm"> <span className="font-graphikSemibold">Call or Text: </span>  832-555-5555</p>
            </div>
        </div>
    </div>

  </>
  )
}

export default Header