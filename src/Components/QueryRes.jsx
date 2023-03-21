export default function QueryRes({data, setBannedList, allCats, setAllCats}){

    
    const handleClick = (event) => {
        const {name, value} = event.target;

        setBannedList((prevState) => [...prevState, name+" : "+value]);

        const filteredCatData = allCats.filter((element) => element[name] != value);
        
        setAllCats(filteredCatData)
    }

    return (
        <div className="queryRes">
               <h2>{data.name}</h2>
                <div className="attributes">
                    <label>
                        origin: 
                        <button 
                            onClick={handleClick} value={data.origin}
                            name="origin"
                        >
                            {data.origin}
                        </button>
                    </label>
                    <label>
                        intelligence:
                        <button  
                            onClick={handleClick} value={data.intelligence}
                            name="intelligence"
                        >
                            {data.intelligence}
                        </button>
                    </label>
                    <label>
                        affection level
                        <button 
                            onClick={handleClick}
                            value={data.affectionLevel}
                            name="affection_level"
                            >
                                {data.affectionLevel}
                        </button>
                    </label>
                    <label>
                        energy level
                        <button 
                            onClick={handleClick} value={data.energyLevel}
                            name="energy_level"
                        >
                            {data.energyLevel}
                        </button>
                    </label>
                </div>
                <img src={data.imgSrc}/>
        </div> 
    )
}