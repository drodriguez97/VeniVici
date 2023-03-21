export default function History({history}){
    return (
        <div className="history">
            <br></br>
            <h2>Who Have We Seen So Far?</h2>
            <br></br>
            { 
                history &&  
                history.map((catHistory, index) => (

                //avoid initial null state of "history"
                (catHistory.name && catHistory.imgSrc) ?
                (       
                    <div key={index}    className="cat-history">
                        <p>{catHistory.name} from {catHistory.origin}</p>
                        <img src={catHistory.imgSrc}/>
                    </div> 
                ) : ("")
                
                ))
            }
      </div>
    )
}