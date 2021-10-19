import axios from "axios";
import React, { useEffect, useState } from "react";
import {View,Text, TouchableOpacity} from 'react-native';

const ProductList = () => {

    const [showProductData, showProductList] =  useState([]);

    useEffect(() => {  
        console.log("gurjeet");
        axios.get("https://fakestoreapi.com/products").then((response) => {
            // console.log(response.data);
            showProductList(response.data)
            console.log(showProductData);
        }).catch(error=>console.log(error));
    }, []);


    return(
        <View>
            {
                // console.log(console.log(showProductData))
                // isProduct.map((item, index) => (
                //     <TouchableOpacity>
                //         key={item.id}
                //         <Text>
                //             {item.title}
                //         </Text>
                //     </TouchableOpacity>
                // ))
            }
            <Text>product List</Text>

        </View>
    )
}

export default ProductList;
