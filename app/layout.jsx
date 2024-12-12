import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';



export const metadata = {
    title: 'Swift Enterprises',
    keywords: 'sustainable direct hydrogen fuel fuels cells aternative renewable',
    description: 'Hydrogen fuel research and development lab. ',
};

const MainLayout = ({ children }) => {
    return ( 
        <html>
            {/* added suppress hydration to get webpack errors to go away */}
            <body suppressHydrationWarning >
                <Navbar />
            <div className='flex flex-col justify-between' >
               
                <main className='' >
                    {children}
                    </main >
                </div>
                <Footer className=''/>
            </body>
        </html>
     );
}
 
export default MainLayout;