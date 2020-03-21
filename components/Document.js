import { Fragment, useState } from 'react'

const Document = ({ doc }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOnClick = (val) => {
    console.log('val', val)
    setIsVisible(!isVisible)
    if ((val === 'Array' || val === 'Object')) {
      console.log('click')
    }
  }

  const returnObjOrArr = (val) => {
    if (typeof (val) === 'object') {
      if (Array.isArray(val)) {
        return 'Array'
      } else {
        return 'Object'
      }
    }
  }

  const handleKeyValueTransform = (key, value) => {
    if (typeof (value) === 'string' && key !== '_id') {
      value = `"${value}"`
    }
    if (key === '_id') {
      value = `ObjectId("${value}")`
    }
    if (typeof (value) === 'object') {
      value = returnObjOrArr(value)
    }
    return [key, value]
  }
  const renderSubDoc = (field, obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return renderDoc(key, value, false)
    })
  }
  const renderDoc = (key, value, display = true) => {
    // const [newKey, newValue] = handleKeyValueTransform(key, value)
    if (typeof (value) === 'object') {
      if (Array.isArray(value)) {
        value.map((val, i) => renderDoc(i, val, false))
      } else {
        renderSubDoc(key, value)
      }
    }

    return (
      <Fragment>
        <div
          key={key}
          id={!display ? `${isVisible ? 'show' : 'hide'}` : ''}
          className={`${returnObjOrArr(value) ? 'sub-fields' : ''}`}
          onClick={() => handleOnClick(value)}
        >
          <p className='key'>{key}:&nbsp;
            <span className='value'>{typeof (value) !== 'object' ? value : returnObjOrArr(value)}</span>
          </p>
          {typeof (value) === 'object' && (
            renderSubDoc(key, value)
          )}
        </div>
        <style jsx>{`
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
          #hide {
            display: none;
          }
          #show {
            display: block;
            padding-left: 1.5rem;
          }
          .sub-fields {
            cursor: pointer;
          }
        `}</style>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <div className='document'>
        {Object.entries(doc).map(([key, value]) => {
          return renderDoc(key, value, true)
        })}
      </div>
      <style jsx>{`
        .document {
          margin: 1rem 3rem;
          padding: 1.5rem 5rem;
          background-color: #fff;
          border-radius: .5rem;
        }
      `}</style>
    </Fragment>
  )
}

export default Document