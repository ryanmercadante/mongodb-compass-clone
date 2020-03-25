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
    console.log('key', key)
    console.log('value', value)
    return [key, value]
  }

  const renderSubDoc = (field, obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return renderDoc(key, value, false)
    })
  }

  const renderDoc = (key, value, display = true) => {
    const [newKey, newValue] = handleKeyValueTransform(key, value)
    if (typeof (newValue) === 'object') {
      if (Array.isArray(newValue)) {
        newValue.map((val, i) => renderDoc(i, val, false))
      } else {
        renderSubDoc(newKey, newValue)
      }
    }

    return (
      <Fragment>
        <div
          key={newKey}
          id={`${returnObjOrArr(newValue) ? 'sub-fields' : ''}`}
          className={!display ? `${isVisible ? 'block pl-6' : 'hidden'}` : ''}
          onClick={() => handleOnClick(newValue)}
        >
          <p className='m-0 text-xl flex font-bold'>{newKey}:&nbsp;
            <span className='flex font-normal'>
              {typeof (newValue) !== 'object' ? newValue : returnObjOrArr(newValue)}
            </span>
          </p>
          {typeof (newValue) === 'object' && (
            renderSubDoc(newKey, newValue)
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