import { Fragment } from 'react'

const Document = ({ doc }) => {
  return (
    <Fragment>
      <div className='document'>
        {Object.entries(doc).map(([key, value]) => {
          let newValue = value
          if (typeof (newValue) === 'string' && key !== '_id') {
            newValue = `"${newValue}"`
          }
          if (key === '_id') {
            newValue = `ObjectId("${newValue}")`
          }
          if (typeof (newValue) === 'object') {
            if (Array.isArray(newValue)) {
              newValue='Array'
            } else {
              newValue = 'Object'
            }
          }
          return (
            <Fragment>
              <p className='key'>{key}:&nbsp;
                <span className='value'>{newValue}</span>
              </p>
            </Fragment>
          )
        })}
      </div>
      <style jsx>{`
        .document {
          margin: 1rem 3rem;
          padding: 1.5rem;
          background-color: #fff;
          border-radius: .5rem;
        }
        p {
          margin: 0;
        }
        .key {
          font-weight: 600;
          font-size: 1.3rem;
          display: flex;
        }
        .value {
          font-weight: 400;
          display: flex;
        }
      `}</style>
    </Fragment>
  )
}

export default Document