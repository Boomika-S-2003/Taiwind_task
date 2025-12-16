const ArrayOfObject=()=>{
    
    const arr_obj=[{name:'boomika',age:20},{name:'muthu',age:23}]
    
    return(
        <>
        {/* <h5>{arr_obj[0].name}</h5>
        <h5>{arr_obj[1].age}</h5> */}
       {arr_obj.map((e,i)=>(

       
        <div style={{background:'blue',color:'white',width:'75px',padding:'10px',
        margin:'50px',textalign:'center'}}key={i}>
            <h5>{i+1}.{e.name}</h5>
            <h5>{e.age}</h5>
            <button>info</button>
        </div>

        ))}
        </>
    )
}
export default ArrayOfObject