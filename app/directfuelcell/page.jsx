import Image from 'next/image';
import Energydense from './Energydensities.png';
import CurrentDense from './currentdensities.png';
import Conventcell from './conventcell.png';

const DirectFuelCell = () => {
    return (
       
        <div className='bg-white pb-10 px-6 py-10 lg:px-8'>
          <div className='mx-auto max-w-3xl text-base leading-7 text-black'>
            
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
                Direct Fuel Cell Application to Lunar NITE
                </h1>
                <br />
                <p className='mt-8'>Swift is using its technology on a NASA Moon to Mars contract through Astrobotic Technology under NASA Contract 80AFRC21C0009. We are at the midpoint in our NASA Lunar contract. We were chosen by (then) Masten Space Systems to develop a hydrogen / hydrogen peroxide fuel cell to survive the lunar night which is 14 Earth days long at -250°C for multiple lunar days.
                </p>
                <br />
  
           
            <p className='mt-8'>Further information concerning this and other space efforts, refer to the NASA contract #80AFRC21C0009. Please visit <a target='blank' href="https://www.astrobotic.com">https://www.astrobotic.com/ </a> for more information.
                </p>
                <br />
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
              Swift Direct Fuel Cell Development
              </h1>
                  
            <p className='mt-6 text-lg leading-8'>
              Swift Enterprises has invented a number of electrocatalytic systems to
              effectively extract electrical energy from hydrogen peroxideUSP
              7,344,799. When reacted with a high energy protonic fuel such as
              aqueous sodium borohydride, significant power and energy can be
              derived, shown below.
            </p>
            <div className='mt-16'>
              <Image
                className='h-50 w-50 rounded-xl bg-gray-50 '
                        src={ Energydense }
                        alt='Graph with wh/Liter on the y-axis and Wh/Kg on the x-axis'
                        width='0'
                        height='0'
                        sizes='100vw'
              />
            </div>
  
            <div className='mt-10 max-w-2xl'>
              <p className='mt-6 text-lg'>
                Work has been proceeding rapidly on the demonstration of a
                technology called the Swift Direct Fuel Cell. The fuel cell uses
                all liquid-phase reactants which are both safe and recyclable. No
                oxygen is needed for operation, making it also suitable for
                underwater and space applications. There has been a significant
                increase in performance based on the development of more selective
                electrocatalysts, higher conductivity ion transfer membranes, and
                the inclusion of novel binders, shown below.
              </p>
              <div className='mt-16'>
                <Image
                  className='h-50 w-50 rounded-xl bg-gray-50 '
                  src={CurrentDense}
                            alt='Graph with wh/Liter on the y-axis and Wh/Kg on the x-axis'
                            width='0'
                            height='0'
                            sizes='100vw'
                />
              </div>
  
              <p className='mt-8'>
                Swift is using its technology on a NASA Moon to Mars contract
                through Astrobotic Technology. Our charter is to fully develop a
                hydrogen and hydrogen peroxide fuel cell to survive the lunar
                night. Great progress in manufacturing, polymer synthesis and
                electrochemistry is being made on this program.
                        </p>
                        <p className='mt-8'>
                        The table below compares the attributes of conventional hydrogen fuel cells with the Swift proton concepts.
              </p>
              <div className='mt-16'>
                <Image
                  className='h-50 w-50 bg-gray-50 '
                  src={Conventcell}
                            alt='Graph with wh/Liter on the y-axis and Wh/Kg on the x-axis'
                            width='0'
                            height='0'
                            sizes='100vw'
                        />
                        <br />
                </div>
                <br />
        
            </div>
          </div>
          </div>
        
    );
}
 
export default DirectFuelCell;