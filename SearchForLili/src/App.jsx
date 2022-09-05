import { useState } from 'react'
import './App.css'
import DATA from './Lili.json'
import Img1 from './assets/485bd691e93606f69c9761d11605695.jpg'
import Img2 from './assets/001VDGccly1h5tgl69gmrj64tc2pk1l002.jpg'
import Img3 from './assets/001VDGccly1h5tgl8df0ij64tc2pkkjn02.jpg'

function App() {

  const [searchTrem, setSearchTrem] = useState('')

  return (
    <>
      <div className="App">
        <div className='Header'>
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
        </div>
        <div className='Search'>
          <input type="text"
           placeholder='Search...'
            className='ipt'
             onChange={event => { setSearchTrem(event.target.value) }} />
        </div>
        {DATA.filter((val) => {
          if (searchTrem === ''){
            return val
          }else if(val.SongTitle.includes(searchTrem)){
            //英文需要考虑大小写问题
            // (val.SongTitle.toLocaleLowerCase().includes(searchTrem.toLocaleLowerCase()))
            return val
          }
        }
        ).map((val, key) => {
          return (
            <div className='lists' key={key}>
              <p>{val.SongTitle}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
