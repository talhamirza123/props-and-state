import React from  'react';


const Newslist = (props) =>
{
    
    const items = props.news.map((item) => {
        return(
            <div>
        <h3>{item.title}</h3>
            <div>
            
            {item.feed}
            
            </div>
            </div>
            
            
            
            )
    })
    
    return( 
           <div>
         {items}
           </div>
            )
}

 export default Newslist;