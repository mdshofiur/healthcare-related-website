import React, { useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

const PostDetail = () => {
    let {id} = useParams();
    const [detail,setdetail]  =  useState({});


    useEffect(() => {
       fetch('/ServiceDetail.json')
        .then((response) => response.json())
        .then(data => {
            const one = data.service.find(service => service.id === id)
            setdetail(one);
        })
    },[id,detail])


    return (
        <div className="">
           <div className="text-center mt-5 mb-5"> <img src={detail.img} alt=""/></div>
             <div className="container">
             <h2 className="text-info mb-3">This is : {detail.title}</h2>
            <p>{detail.desc}</p>
             </div>
        </div>
    );
};

export default PostDetail;