import React from 'react';

const Page = ({data}) => {
 
  const {items}=data
  console.log(items )
 
 
    
      const HandleClik=()=>{

      }
    
    return (
      
        <div style={{textAlign :"center"}}>
           <h1>Projectes</h1>
           <div  style={{textAlign :"center" ,display:"grid" , gridTemplateColumns:"50% 50%"}}>
          {
            items.map((item)=>{
              return (
                <div key={Math.random() }  style={{ display:"flex", justifyContent:"space-around",textAlign :"center", alignItems:"baseline", padding:"30px"}}
                 onClick={HandleClik}
                >

                  <div>
                    <h2>{item.name}</h2>

                    <p>{item.description}</p>
                    <div  style={{ display:"flex", margin:"auto"}}> 
                      <h4>Like: {item .score}</h4>
                      <h4>forks: {item.forks_count}</h4>

                        </div>

                  </div>
                  <div>
                    <h2 style={{marginBottom:"-30px"}}>{item.language}</h2>

                  </div>



                </div>
              )
            })
          }
</div>

            
        </div>
    );
};

export async function getStaticProps(context) {
  const res= await fetch(`https://api.github.com/search/repositories?q=user:jithstephen13+fork:true&sort=updated&per_page=10&type=Repositories`)
  const data= await res.json()
  console.log(data)
  return {
    props: {data}, 
  }

  
}


export default Page;



