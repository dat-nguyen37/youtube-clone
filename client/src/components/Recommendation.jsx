import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Container=styled.div`
flex:2;
`

export default function Recommendation({tags}) {
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        const fetchVideo=async()=>{
            const res=await axios.get(`/videos/tags?tags=${tags}`);
            setVideos(res.data)
        };
        fetchVideo()
    },[tags])
  return (
    <Container>
      {videos.map(video=>(
        <Card type="sm" key={video._id} video={video}/>
      ))}
    </Container>
  )
}
