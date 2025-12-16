
const ArrayOfObjects=()=>{
    
    const AboutMe=[{PersonelInformation:{UserName:'boomika',mble:8940544005,Gender:'female',DOB:'11/07/2003',city:'komarapalayam'}},
        {Education:{Degree:'B.Sc.Mathematics',Institution:'JKKNataraja college of arts amd science'}},
        {ProfestionalDetails:{Company:'Sagility healthcare',Experiece:"1.5years"}}
        ]
        

    return(
        <>
        {AboutMe.map((e,i)=>(
        <div key={i}>
        <div>
            <p>{AboutMe[0].PersonelInformation.UserName}</p>
        <p>{AboutMe[0].PersonelInformation.mble}</p>
        <p>{AboutMe[0].PersonelInformation.Gender}</p>
        <p>{AboutMe[0].PersonelInformation.DOB}</p>
        <p>{AboutMe[0].PersonelInformation.city}</p>
        </div>
        <div>
            <p>{AboutMe[1].Education.Degree}</p>
            <p>{AboutMe[1].Education.Institution}</p>
        </div>
        <div>
            <p>{AboutMe[2].ProfestionalDetails.Company}</p>
            <p>{AboutMe[2].ProfestionalDetails.Experiece}</p>
        </div>
        
    </div>
    ))}
    </>

    )
}

export default ArrayOfObjects