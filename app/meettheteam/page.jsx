// "use Client"
import Image from 'next/image'
import Mrs from '@/public/images/teamImages/mr.jpg'
import Mr from '@/public/images/teamImages/jr.jpg';
const person = [
  {
    name: 'Mary-Louise R.Rusek, M.S.',
    role: 'President/Co-Owner/Scientist',
    imageUrl: Mrs,
    alt: 'A picture of Mary Rusek, smiling and with glasses',
    name: 'Mary-Louise R.Rusek, M.S.',
    role: 'President/Co-Owner/Scientist',
    imageUrl: Mrs,
    experience1:
      'Four years: Research chemist and laboratory manager for the Air Force Rocket Propulsion Laboratory at Edwards Air Force Base.',
    experience2:
      'Ten years: Owner/Operator of Ad Astra, a small business specializing in rocket propulsion products.',
    experience3: 'Makes an excellent Baklava.',
    education1: 'B.S. Art Education, Case Western Reserve University',
    education2: 'B.F.A. Cleveland Institute of Art',
    education3: 'B.S. Geology, Northern Illinois University',
  },
  {
    name: 'John J. Rusek, Ph.D.',
    role: 'President/Co-Owner/Engineer',
    imageUrl: Mr,
    alt: 'A picture of Doctor John Rusek, smiling.',
    experience1:
      '47 years of experience in the chemical and propulsion industries',
    experience2:
      '31 years of experience in the military aerospace community as a DoD civil servant.',
    experience3:
      '25 years experience as a professor with the School of Aeronautics and Astronautics at Purdue University.',
    education1: 'B.S. Chemical Engineering, Case Western Reserve University',
    education2: 'M.S. Chemical Engineering, Case Western Reserve University',
    education3:
      'B.D. Chemical Engineering/Atomic Physics, Case Western Reserve University',
  },
]

const MeetTheTeam = () => {
  return (
    <div className='bg-white sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl '>
          <h2 className='text-3xl text-center font-bold tracking-tight text-black sm:text-4xl'>
            Meet the Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-900 text-left'>
            Living out our a passion, long before it was stylish, by believing that
            by working together, the World will discover sustainable sources of energy that are
            clean, efficient and renewable.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none'
        >
          {person.map((person) => (
            <li
              key={person.name}
              className='flex flex-col gap-6 xl:flex-row'
            >
              <Image
                alt='A picture of Mary Rusek, smiling and with glasses'
                src={person.imageUrl}
                className='w-52 flex-none rounded-2xl object-cover'
                width='0'
                height='0'
                sizes='100vw'
              />
              <div className='flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-black'>{person.role}</p>
                <h5 className='text-lg font-semibold'>Experience</h5>
                <ul className='list-disc list-inside'>
                  <li>{person.experience1}</li>
                  <li>{person.experience2}</li>
                  <li>{person.experience3}</li>
                </ul>
                <h5 className='text-lg font-semibold'>Education</h5>
                <ul className='list-disc list-inside'>
                  <li>{person.education1}</li>
                  <li>{person.education2}</li>
                  <li>{person.education3}</li>
                </ul>

             
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MeetTheTeam
