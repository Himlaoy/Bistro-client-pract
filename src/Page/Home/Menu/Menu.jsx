import React, { useEffect, useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popular = data.filter(pop=>pop.category=== 'popular')
            setMenu(popular)

        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Menu;
