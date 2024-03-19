import React from 'react'

import AllSignature from './AllSignature'

const AllSignatureProvider = ({children}) =>{
  return (
  <AllSignature.Provider value={{}}>
    {children}
  </AllSignature.Provider>
  )
}

export default AllSignatureProvider