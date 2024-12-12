'use client'
import Image from 'next/image'
// import { Gallery, Item } from 'react-photoswipe-gallery'
import logo from '@/assets/images/swift-logo.png'
import fuelcell1 from '@/public/images/researching/fuelcell1.jpg'
import fuellabphoto from '@/public/images/researching/fuellabphoto.jpg'
import sixcellintest from '@/public/images/researching/sixcellintest.jpg'
import labphoto from '@/public/images/researching/labphoto.jpg'
import currentstatus from '@/public/images/researching/current-status.jpg'
import single5cell from '@/public/images/researching/single5cellInTest.jpg'
import peopleworking from '@/public/images/researching/peopleworking-copy.jpg'

const HomePage = () => {
  return (
    <div className='bg-white py-10 lg:px-8'>
      <div className='mx-auto max-w-3xl text-base leading-7 text-black'>
        <div className='flex  '>
          <Image
            alt='Swift Enterprises Company logo'
            className='h-20 w-auto'
            src={logo}
          />

          <h1 className='p-4 text-3xl text-center font-bold tracking-tight sm:text-4xl'>
            Established in 2001
          </h1>
        </div>
      </div>
      <br />

      <div className='text-xl text-black'>
        <h5>
          Swift Enterprises is working to advance the areas of power,
          energetics, and propulsion at the practical level through discovery.
          Our facilities allow Swift to perform laboratory exploration, process
          and performance development at the labroratory level.We utilize the
          services of industry-recognized third-party laboratories to validate
          in-house findings. Along with its advisors and partners, Swift
          Enterprises is continuing to enable the United States and the world in
          energy independence.
        </h5>
        <br />
        <div className='grid grid-cols-3 grid-flow-row gap-4'>
          <div>
          <Image
            src={single5cell}
            alt='Five-Single cell set-up in the labratory'
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
          />

          </div>
          <div>
          <Image
            src={fuelcell1}
            alt='Beaker with liquid and tubes coming out of it feeding into a computer monitor'
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
            />
          </div>
          <div>
          <Image
            src={fuellabphoto}
            alt='Man observing a beaker with a pink luquid in it'
            className=' w-full rounded-xl'
            
            width={100}
            height={100}
            // priority={true}
            />
                      <Image
            src={currentstatus}
            alt='Molecular model of the desired fuel atoms.'
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
          />
            </div>
          <Image
            src={labphoto}
            alt='Round glass container with clear fuel at the bottom'
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
          />
          <Image
            src={sixcellintest}
            alt='lab set up for the six cell testing.'
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
          />

         
          <Image
            src={peopleworking}
            alt='Dr. John Rusek working with his team in the lab taking notes and consulting one another. '
            className='w-full rounded-xl'
            width={100}
            height={100}
            // priority={true}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
