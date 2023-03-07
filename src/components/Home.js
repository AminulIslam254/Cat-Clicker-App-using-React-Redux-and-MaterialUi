import React from 'react'
import Header from './Header'
import ImageGallery from './ImageGallery'
import LeftPanel from './panels/LeftPanel'
import MidPanel from './panels/MidPanel'
import RightPanel from './panels/RightPanel'

const Home = () => {
  return (
    <>
      <Header />
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", minWidth: 200,width:"90%" }}>
          <LeftPanel />
          <MidPanel />
          <RightPanel />
        </div>
      </div>

      <div>
        <ImageGallery />
      </div>

    </>
  )
}

export default Home