function Header() {
  
  return (
  <>
    <div className="lg:hidden">
        <div className="flex justify-between bg-softblue-primary px-4 py-2 mx-5 mt-3">
            <p className="text-truwinblue-900 font-graphikSemibold text-[12px]">Call for an estimate:</p> 
            <p className="text-truwinblue-900 font-graphikSemibold text-[12px]"><a href="tel:832-777-3681">(832) 777-3681</a></p>
        </div>
        <div className="hidden">
            <p>Call or Text <a href="tel:832-777-3681">(832) 777-3681</a></p>
        </div>
    </div>

    <div className="max-w-7xl mx-auto">
        <div className="lg:flex md:hidden hidden bg-softblue-primary rounded justify-between px-4 py-2 mx-5">
            <div className="flex">
                <p className="text-truwinblue-900 text-[12px]"><span className="font-graphikSemibold text-[10px]">Current Special Rate:</span> <span className="font-graphik text-[10px]">20% OFF All Windows. Available until August 15th.</span></p> 
            </div>
            <div className="flex">
                <p className="text-truwinblue-700 text-[12px]"> <span className="font-graphikSemibold">Call or Text: </span>  <a href="tel:832-777-3681">(832) 777-3681</a></p>
            </div>
        </div>
    </div>

  </>
  )
}

export default Header