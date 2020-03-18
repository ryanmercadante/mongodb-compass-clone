import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Home = ({ data }) => {

  return (
    <div>
      <Layout data={data}>
        MAIN CONTENT
      </Layout>
      <style jsx>{`
        .container {
          max-width: 120rem;
          margin: 8rem auto;
          background-color: #f4f2f2;
          box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
          min-height: 50rem;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Home
