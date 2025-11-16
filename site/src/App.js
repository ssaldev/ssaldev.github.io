
//require('fs');
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import me from './Assets/me.png';
import ehgFace from './Assets/emoji.png';
import youtubeLogo from './Assets/youtube.png';
import ehgBackground from './Assets/scr2_upscaled.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import discordLogo from './Assets/Discord-Logo-Color.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import tiktokLogo from './Assets/tiktokicon.png';
import ehgLogo from './Assets/ehglogo.png';
import maincapsule from './Assets/maincapsule (1).jpg';

import steamLogo from './Assets/Steam_icon_logo.svg.png';

import Social from './components/social/Social.js';

import images from "./images.js";
import Pitchdeck from "./pitchdeck.js";
import { contentChunk, contentChunkWithVideo, contentChunkWithImages, fetchMonsterImage, renderArray, simpleListItemP, simpleListItem } from './util.js';
import SteamGameInfo from './SteamGameInfo.js';
import './Header.scss';
import './App.scss';
import "./footer.scss";
import "./Content.scss";
import Game from './Game.js';
import PatchNotes from './patchnotes.js';
import Support from './Support.js';
import Panel from './Panel.js';
import TwitchPanel from './TwitchPanel.js';
import RoadmapPanel from './Roadmap.js';
const navbar = (discordLink, kofi, steam) => {
  return (<><li><a href="#">Patch Notes</a></li>
    <li><a href={steam}>Steam</a></li>
    <li><a href="#">Games</a></li>
    <li><a target="_blank" href={kofi}>Support</a></li>
    <li><a target="_blank" href={discordLink}>Contact</a></li>
  </>)
};
function App() {
  const steam = "https://store.steampowered.com/app/2081720/Epic_Hero_Game/";
  const kofi = "https://ko-fi.com/scuffedgamedev"
  const discordLink = "https://discord.gg/YBESVNMwku";
  const [bgName, setBgName] = useState("background");
  const twitchChannelName = "clayman_dev";
  const twitch = "https://www.twitch.tv/clayman_dev";
  //artStyleExpanded
  //const [monsterNum, setMonsterNum] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      let backgroundClassName = "background no-blur";
      if (window.scrollY > 100) {
        backgroundClassName = "background blur";
      }
      if (window.scrollY > 200) {
        backgroundClassName = "background blur-hard";
      }


      setBgName(backgroundClassName);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className="App">
      {
        //     <img src={ehgBackground}></img>
      }
      <header className="">
        <div class={bgName}></div>
        <div className="">

          <nav>
            <a class="flexbox-root center-text" href="#"><img className="logo" src={ehgFace}></img><h1> Scuffed Gamedev</h1></a>
            <ul class="nav-links">
              {
                navbar(discordLink, kofi, steam)
              }
            </ul>
          </nav>
          {/*
          <Social linkTo={"https://twitter.com/Ssaldev"} image={twitterLogo} />
          <Social linkTo={"https://www.youtube.com/@scuffedgamedev"} image={youtubeLogo} />
          <Social linkTo={"https://www.twitch.tv/clayman_dev"} image={twitchLogo} />
          <Social linkTo={"https://discord.gg/YBESVNMwku"} image={discordLogo} />
          <Social linkTo={"https://www.tiktok.com/@scuffedgamedev"} image={tiktokLogo} />
          <Social linkTo={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"} image={steamLogo} />
      */}
        </div>

        <div class="landing flexbox-root">
          <img class="game-logo" src={ehgLogo}></img>
          <div class="center-all">

            <a href={discordLink} target="_blank"><button class="join-btn">Join Playtest</button></a>

          </div>
        </div>


      </header>
      <div className='primary-content'>
        <div className='content-block'>
          {/*
          <p className='list-paragraph'>
            Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities.
            <br></br><iframe width="560" height="315" src="https://www.youtube.com/embed/ias3KT3sFRE" frameborder="0" allowfullscreen="true" ></iframe>

            <p className='list-paragraph2'>
              As you fight through enemies, player gets stronger during the fight (think of tournament of power in Dragon Ball Super)<br></br><br></br>
              The game uses physics as a backbone for ridiculous anime powerscaling, where you can physically see a difference in the combat, the more stronger you get.
            </p>
            <p>(This page describes patch 0.3 since 29.12.2024)</p>
            <a href={kofi}><img style={{ "width": "64px" }} src={require("./Assets/ko-fi.png")}></img>Support development</a>
          </p>
*/}
          {
            /*<Pitchdeck></Pitchdeck>*/
          }

          <div class="games-container">
            <Game
              description={"Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."}
              link={steam}
              video={"https://www.youtube.com/embed/ias3KT3sFRE"}
              title={"Epic Hero Game"}
              tags={["Early Access", "Roguelite", "Physics-Based", "Superhero", "Action"]}
            ></Game>
            <Panel >
               <div className="flexbox-root flexgap">
                <Support link={kofi}></Support>
                <TwitchPanel channelName={twitchChannelName}></TwitchPanel>
              </div>
              <RoadmapPanel
                milestones={[

                  //Pending
                  { status: 'In-Progress', text: 'Early access on steam' },
                  
                     { status: 'Pending', text: 'Upgrade system design' },
                  { status: 'Pending', text: 'Physics engine upgrade' },

                  { status: 'Completed', text: 'Initial prototype finished' },
                ]}
              />
             
            </Panel>
            {/*<Game
              description={"Chat Ragdoll Racing is fully physics-based ragdoll animated simulation game where Twitch Streamers can host games for their communities and have people race against each other in a wild physics-based world."}
              link={"https://store.steampowered.com/app/3511350/Chat_Ragdoll_Racing/"}
              video={"https://www.youtube.com/embed/QYi36z436ms"}
              title={"Chat Ragdoll Racing"}
            ></Game>
            */}
          </div>
          <div>

          </div>
          <div>
            {
              <PatchNotes></PatchNotes>
            }
          </div>

        </div>

      </div >

      <footer>
        <div class="footer-container">
          <div class="footer-logo">Scuffed Gamedev</div>
          <ul class="footer-links">
            {
              navbar(discordLink, kofi, steam)
            }
          </ul>
        </div>
        <div class="footer-bottom">
          &copy; 2025 Scuffed Gamedev. All rights reserved.
        </div>
      </footer>

    </div >
  );
}

export default App;
