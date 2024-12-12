import Image from 'next/image';
import renewFuelGraph from '@/public/images/researching/RenewFuelGraph.png';
import swiftFuelVisual from '@/public/images/researching/SwiftFuelVisual.jpg';


const RenewableFuels = () => {
    return ( 
        <div fluid='md'>
        <div className='bg-white px-6 py-10 lg:px-8'>
          <div className='mx-auto max-w-3xl text-base leading-7 text-black'>
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
              Swift Renewable Fuel Summary
            </h1>
            
           
           
            <iframe title="video frame of Dr. Rusek flying his planes on this renewable fuel" src="https://drive.google.com/file/d/1NSVOGNFe6x7aAMngCXhqPNCYu3NaqgqJ/preview" width="640" height="480" allow="autoplay">
              
            </iframe>
  
              <h4 className='text-blue-700 hover:underline'>
                Renewable Fuel Performance video
              </h4>
          
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
              Performance
            </h1>
  
            <div className='mt-10 max-w-2xl'>
              <p className='mt-6 text-lg'>
                Swift Enterprises has discovered a renewable, unleaded aviation
                gasoline of 102.9 Motor Octane Number with 15% increased energy
                (range) and a turbine fuel with improved properties over
                conventional JP-4 or Jet A. Both of these fuels have been tested
                by the FAA (aviation gasoline) and the USAF (turbine fuel) and
                have been vetted as 100% renewable, with equivalent or superior
                performance to fuels derived from petroleum. The Swift turbine
                fuel can also be used as a renewable diesel fuel. A major benefit
                is that the chemical process maintains a constant Cetane Number
                and zero sulfur content due to the feedstock. Lastly, motor
                gasoline can now have a pure hydrocarbon, renewable component to
                give increased energy (range), lower pollution, and less engine/
                storage damage compared to the use of 10% ethanol. All of these
                fuel options are drop-in replacements.
              </p>
              <figure className='mt-16'>
                <img
                  className='h-50 w-50 '
                  src={renewFuelGraph}
                  alt='Graph with wh/Liter on the y-axis and Wh/Kg on the x-axis researcg points plotted along the way'
                />
              </figure>
              <>
               
                    <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
                      Applications
                    </h1>
                    <ul className='mt-8 max-w-xl list-disc list-inside text-black'>
                      <li className=''>Motor Gasoline</li>
                      <li className=''>Disel Fuel</li>
                      <li className=''>Aviation Fuel</li>
                      <li className=''>Turbine Fuel</li>
                      <li className=''>Rocket Fuel</li>
                      <li className=''>Bunker Fuel</li>
                      <li className=''>Polymer Cross-Linking agent</li>
                    </ul>
  
                    <h1 className='mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl'>
                      Production
                    </h1>
                    <p className='mt-6 text-lg'>
                      The essential ingredient is mesitylene in all of the
                      compositions. Conventional chemical processing has shown
                      this to be a high-cost material to produce due to the
                      difficulty of separation from petroleum refinery streams.
                      Swift Enterprises has discovered a process of efficiently
                      producing this with conventional petroleum technology. Swift
                      has demonstrated the direct synthesis of mesitylene from
                      acetone, ethanol, and other renewable feedstocks.
                    </p>
                 
                    <Image
                      className='h-100 w-50 '
                      alt='clear glass bottle labeled SF-100 halfway filled with a clear fuel'
                      src={swiftFuelVisual}
                    />
               
              </>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default RenewableFuels;