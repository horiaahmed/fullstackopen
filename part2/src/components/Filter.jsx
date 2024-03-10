const Filter=({search,setsearch})=>{
  

    return(
        <div> 
        Filter shown with: <input value={search} onChange={setsearch} />
      </div>
    )

}
export default Filter