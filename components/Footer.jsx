
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return ( 
     
    <footer className='w-full sticky bottom-0 pt-10 flex flex-col'>
      
        
          <div className=' bg-gray-300 rounded-lg shadow m-4 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <Link href="mailto:john.rusek@swiftenterprises.com; mary.rusek@swiftenterprises.com" className="hover:underline text-light">
                    Contact
                </Link>
                  
                  
            <p>Swift Enterprises &copy; {currentYear}</p>
                 
          
            <Link className='text-light' href="/privacypolicy">
              Privacy Policy
            </Link>
          </div>
    

    </footer> 
   

     );
}
 
export default Footer;