import React,{useState, useEffect} from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export const InfiniteScoll=()=>{

const [data, setData]=useState([]);
const [page, setPage]=useState(1)
const [loader, setLoader]=useState(true)

    useEffect(()=>{
        
        fetchInfiniteScroll(page)
       // loadMoreHandle()
      }, [])

      const fetchInfiniteScroll= async(page)=>{
        const response =   await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_results=10`)
      //  axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      //  .then((res) =>{
      //   console.log('====res',res)
      //  })  
       console.log('====response',response)
         if(response){
           if(page > 1){
           let resultArr = [...data, ...response.data]
           setData(resultArr)
           //setLoader(false)
           }
           else{
             setData(response.data)
           }
           setLoader(false)
         }
         else{
           return ""
         }
  
          }

      const loadMoreHandle =(evt)=>{
        console.log({evt})
       // let bottom = evt.target.scrollHeight - evt.target.clientHeight - evt.target.scrollTab < 50;
      //  if(bottom){
            let page_ = page + 1;
            fetchInfiniteScroll(page_)
            setLoader(true)
            setPage(page_)
       // }
      }
      
    return(

      <InfiniteScroll dataLength={data.length} nfetchInfiniteScrollexfetchInfiniteScrollt={loadMoreHandle} hasMore={true}>
          <>
          {
            data && data.map((image) => {
              console.log({image})
              return(
                <img src={image.url}></img>
              )
            })
          }
          </>
          </InfiniteScroll>
    )
}