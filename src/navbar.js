
const Navbar=()=>{
    return(
        <nav className=" bg-purple-500 lg:flex lg:justify-between lg:shadow-lg text-purple-200" >
            <h1 className="text-[30px]">chocolate</h1>
            <ul className="flex space-x-4 text-right content-end">
                <li className="rounded-md hover:bg-purple-300"><a href="#">home</a></li>
                <li className=" rounded-md hover:bg-purple-300"><a href="#">project</a></li>
                <li className="rounded-md hover:bg-purple-300"><a href="#">about</a></li>
                <li className="rounded-md hover:bg-purple-300"><a href="#">shop</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;