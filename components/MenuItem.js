import Link from 'next/link'

const MenuItem = ({ name }) => (
  <li className='text-center'>
    <Link href='/dbs/[name]' as={`/dbs/${name}`}>
      <a className='relative mb-2 text-gray-200 uppercase block py-6 px-12 text-2xl hover:text-green-500'>{name}</a>
    </Link>
  </li>
)

export default MenuItem