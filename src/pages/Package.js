import { useEffect, useState } from "react";
import PackDe from "./Home/PackDe.js/PackDe";

const Package = () => {
    const [packages, setPackages]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/package')
        .then(res=>res.json())
        .then(data=>{setPackages(data)
            })

    },[])

    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3'>
              {
                   packages.map(pack=><PackDe key={pack._id} pack={pack} ></PackDe>)
               }

          
        </div>
        </div>
    );
};

export default Package;