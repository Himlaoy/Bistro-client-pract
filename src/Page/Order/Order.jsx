import React, { useState } from 'react';
import Cover from '../../shared/Cover/Cover';
import imgShop from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hook/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FoodCard from '../../shared/FoodCard/FoodCard';

const Order = () => {
    const categories = ['salad', 'soup', 'pizza',  'dessert', 'drinks'] 
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu()

    const dessert = menu.filter(item=>item.category=== 'dessert')
    const soup = menu.filter(item=>item.category=== 'soup')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const drinks = menu.filter(item=>item.category=== 'drinks')
    const offered = menu.filter(item=>item.category=== 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover image={imgShop} title={'Visit Our Shop'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1  lg:grid-cols-3 gap-10'>
                        {
                            salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;