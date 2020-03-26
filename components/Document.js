import { Fragment, useState } from 'react'

const Document = ({ doc }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOnClick = (val) => {
    console.log('val', val)
    setIsVisible(!isVisible)
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
    console.log('typeof new value', typeof (value))
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
          id={`${returnObjOrArr(value) ? 'sub-fields' : ''}`}
          className={!display ? `${isVisible ? 'block pl-6' : 'hidden'}` : ''}
          onClick={() => handleOnClick(value)}
        >
          <p className='m-0 text-xl flex font-bold'>{key}:&nbsp;
            <span className='flex font-normal'>
              {typeof (value) !== 'object' ? value : returnObjOrArr(value)}
            </span>
          </p>
          {typeof (value) === 'object' && (
            renderSubDoc(key, value)
          )}
        </div>
        <style jsx>{`
          #sub-fields {
            cursor: pointer;
          }
        `}</style>
      </Fragment>
    )
  }

  return (
    <div className='my-4 mx-12 bg-white rounded-lg py-6 pl-20 shadow'>
      {Object.entries(doc).map(([key, value]) => {
        return renderDoc(key, value, true)
      })}
    </div>
  )
}

export default Document