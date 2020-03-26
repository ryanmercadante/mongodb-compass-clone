import Layout from '../components/Layout'

const Home = ({ dbs }) => (
  <Layout dbs={dbs}>
    <main>
      <div className='text-center'>
        <h1 className='text-5xl mt-8 text-green-500'>MongoDB Compass Clone</h1>
        <p className='text-3xl mt-4 text-gray-900'>Your databases are listed on the sidebar. Click on one of them to see your collections and documents!</p>
      </div>
    </main>
  </Layout>
)

export default Home
