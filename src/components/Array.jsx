const Array=()=>{
    
    const title='array rendering'

    const arr=['maths','boolean','yes',5000,'vijay','surya']

    return(
        <>
        <h1>{title}</h1>
        <span>{arr[0]}</span>
        <span>{arr[0][4]}</span>

        <div style={{background:'yellow',padding:'5px',width:'100px'}}>
        {arr.map((e,i)=>(
            <p key={i}>{i+1}.{e}</p>
        ))}
        </div>
        </>
    )
}
export default Array



