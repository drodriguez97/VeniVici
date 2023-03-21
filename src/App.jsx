import { useState, useEffect } from 'react'
import QueryRes from './Components/QueryRes'
import History from './Components/History';
import Banned from './Components/Banned';
import './App.css'

function App() {
  const [allCats, setAllCats] = useState([]);
  const [history, setHistory] = useState([
    {
      name: null, 
      origin: null,
      imgSrc: null
    }
  ]);
  const [data, setData] = useState({
    name: "",
    origin: "",
    intelligence: null,
    affectionLevel: null,
    energyLevel: null,
    imgSrc: ""
  })
  const [bannedList, setBannedList] = useState([]);
  const [showData, setShowData] = useState(false);

  const api_key = "live_mvxUhH8P2fgmeBund7bjWL4t7DRrGOZtouA6bIK6pvJEQkWcr468kh4xTqlgQOYk";

  useEffect(() => {
    async function getAPI() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds",{headers: {
        'x-api-key': api_key
      }})
      const queryData = await response.json();

      //filter data so only data with displayed attributes are in the state allCats
      const FilteredData = queryData.filter(element => element.image?.url != null);


      //set it to allCats state var
      setAllCats(FilteredData);     
    }
    getAPI();
  },[])

  const fillData = (index) => {
    const {name, origin, intelligence, affection_level, energy_level, image} = allCats[index];
    setData(prevState => ({
      ...prevState,
      name: name,
      origin: origin,
      intelligence: intelligence,
      affectionLevel: affection_level,
      energyLevel: energy_level,
      imgSrc: image.url
    }))

    setHistory((prevCats) => [...prevCats, {name: name, origin:origin, imgSrc: image.url}]);

  }
  const getRandomCat = () => {
    let randNum = Math.floor(Math.random() * 65);
    while(allCats[randNum] === undefined){
      randNum = Math.floor(Math.random() * 65);
    }
    fillData(randNum);



    setShowData(true);
  }

  return (
    <div className="App">
      <History history={history}/>

      <div className="main-container">
        <h1>Veni Vici!</h1>
        <h3>Discover cats from your wildest dreams!</h3>
        <h3>😺😺😺😺😺😺😺😺😺😺😺😺</h3>

        {showData && 
          <QueryRes 
            data={data} 
            setBannedList={setBannedList} 
            allCats={allCats}
            setAllCats={setAllCats}
          />
        }

        <button onClick={getRandomCat}>Discover!</button>
      </div> 
      <Banned 
        bannedList={bannedList} 
        setBannedList={setBannedList}
      />
    </div>
  )
}

export default App
