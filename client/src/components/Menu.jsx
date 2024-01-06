import React from 'react'
import styled from 'styled-components'
import LogoYTB from "../img/logo.png"
import {AccountCircleOutlined, ExploreOutlined, FlagOutlined, HelpOutline, HistoryOutlined, HomeOutlined, LightModeOutlined, LiveTvOutlined, MovieCreationOutlined, MusicNoteOutlined, NewspaperOutlined, SettingsOutlined, SportsBaseballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Container=styled.div`
flex:1;
background-color:${({theme})=>theme.bgLighter};
height:100vh;
color:${({theme})=>theme.text};
font-size:14px;
position:sticky;
top:0;
`
const Wrapper=styled.div`
padding: 18px 26px;
`
const Logo=styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px;
`
const Img=styled.img`
height:25px;
`
const Item=styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:7.5px 0px;
&:hover{
  background-color:${({theme})=>theme.soft}
}
`
const Hr=styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div`
`
const Button=styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`
const Title=styled.h2`
font-size:14px;
font-weight:500;
color:#aaaaaa;
margin-bottom:20px;
`

export default function Menu({darkMode,setDarkMode}) {
  const {currentUser}=useSelector(state=>state.user)
  return (
    <Container>
      <Wrapper>
       <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
        <Logo>
          <Img src={LogoYTB}/>
          Youtube
        </Logo>
        </Link>
        <Item>
          <HomeOutlined/>
          Home
        </Item>
       <Link to="/trends" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <ExploreOutlined/>
          Explore
        </Item>
        </Link>
       <Link to="/subscriptions" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <SubscriptionsOutlined/>
          Subscriptions
        </Item>
       </Link>
        <Hr/>
        <Item>
          <VideoLibraryOutlined/>
          Library
        </Item>
        <Item>
          <HistoryOutlined/>
          History
        </Item>
        <Hr/>
        {!currentUser &&  
          <>
          <Login>
            Sign in to like videos, comment, and subscribe
            <Link to="signin" style={{textDecoration:"none"}}>
            <Button><AccountCircleOutlined/>SIGN IN</Button>
            </Link>
          </Login>
          <Hr/>
          </>
        }
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <MusicNoteOutlined/>
          Music
        </Item>
        <Item>
          <SportsBaseballOutlined/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined/>
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlined/>
          Movies
        </Item>
        <Item>
          <NewspaperOutlined/>
          News
        </Item>
        <Item>
          <LiveTvOutlined/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlined/>
          Settings
        </Item>
        <Item>
          <FlagOutlined/>
          Report
        </Item>
        <Item>
          <HelpOutline/>
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <LightModeOutlined/>
          {darkMode? "Dark" : "Light"} Mode
        </Item>
        
      </Wrapper>
    </Container>
  )
}
