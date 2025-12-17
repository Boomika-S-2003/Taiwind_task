const Object =()=>{
   const title='object rendering'
   const obj={movie:'Ratchasan',year:2025}

   const nested_obj={Ratchasan:{salary:{hero:'50k',heroin:'55k',comedian:'40k'}}}
   
   return(
   <div>
    <h1>object</h1>
    <h1>{title}</h1>
    <div>{obj.year}</div>
    <p>{nested_obj.Ratchasan.salary.hero}</p>
    
</div>

    )
}
export default Object

