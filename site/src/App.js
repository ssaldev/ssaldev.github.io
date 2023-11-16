
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
import Game from './components/game/game.js';
import images from "./images.js";


import './App.scss';

//clip of standard gameplay [third person controller]
//clip of gear changing [progression]
//clip of levelup sequence [progression]
//clip of level showcase
//screenshots of player with transparency
//update screenshot array with more up to date pics
const fetchMonsterImage = (monsterNum) => {//const imgCount = 3;
  /*
  const incrementMonsterNum = () => {
    if (monsterNum > imgCount) {
      setMonsterNum(0);
    }
    else {
      setMonsterNum(monsterNum + 1);
    }
  }*/

  let output = null;
  if (monsterNum == 0)
    output = require("./Assets/ehgmonsters/tablemonster.png");

  if (monsterNum == 1)
    output = require("./Assets/ehgmonsters/sphagettimonster1.png");


  if (monsterNum == 2)
    output = require("./Assets/ehgmonsters/confusedmonster.png");
  if (monsterNum == 3)
    output = require("./Assets/ehgmonsters/monster1_2.png");
  if (monsterNum == 4)
    output = require("./Assets/ehgmonsters/Spellcast ascended.png");

  if (monsterNum == 5)
    output = require("./Assets/ehgmonsters/snek.png");
  if (monsterNum == 6)
    output = require("./Assets/ehgmonsters/beam.png");

  //  incrementMonsterNum();
  return output;

};

const contentChunk = (title, input) => {
  return (
    <div className='content-chunk'>
      <h3 className='content-chunk-text'><b>{title}</b></h3>
      {input}
      <hr></hr>
    </div>);
};

const contentChunkWithVideo = (title, input1, vid) => {
  return contentChunk(title,
    <div className='content-wrapper'>

      <pre className='pre-tag-full'>
        <div className="block-wrapper">
          <div className="pre-block">
            <video width="640" height="360" controls autoplay>
              <source src={vid} type="video/mp4" />

            </video>
          </div>
          <div className="pre-block">
            {input1}
          </div>
        </div>
      </pre>

    </div>
  )
}
const simpleListItem = (title, description) => {
  return <li><p className='list-title'>{title}</p> <p className='list-paragraph'>{description}</p></li>

};

const simpleListItemP = (title, description) => {
  return <p><p >{title}</p> <p className='list-paragraph'>{description}</p></p>

};

const renderArray = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(element);
  }

  return output;
}

const contentChunkWithImages = (title, input1, img1, img2) => {
  return contentChunk(title,
    <div className='content-wrapper'>
      <img className="monster-img" src={fetchMonsterImage(img1)}></img>
      <pre className='pre-tag'>
        {input1}
      </pre>
      <img className="monster-img" src={fetchMonsterImage(img2)}></img>
    </div >
  )
}

function App() {


  const [scrollY, setScrollY] = useState(0);
  const [bgName, setBgName] = useState("background");
  const [artStyleExpanded, setArtStyleExpanded] = useState(false);
  const [technicalsExpanded, setTechnicalsExpanded] = useState(false);
  const [enemyDesignExpanded, setEnemyDesignExpanded] = useState(false);

  const [levelDesignExpanded, setLevelDesignExpanded] = useState(false);
  //artStyleExpanded
  //const [monsterNum, setMonsterNum] = useState(0);


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
      <header className="App-header">
        <div class={bgName}></div>
        <div className="flexbox-root socials-root">
          <img className="ehg-face" src={ehgFace}></img>
          <Social linkTo={"https://twitter.com/Ssaldev"} image={twitterLogo} />
          <Social linkTo={"https://www.youtube.com/@scuffedgamedev"} image={youtubeLogo} />
          <Social linkTo={"https://www.twitch.tv/clayman_dev"} image={twitchLogo} />
          <Social linkTo={"https://discord.gg/YBESVNMwku"} image={discordLogo} />
          <Social linkTo={"https://www.tiktok.com/@scuffedgamedev"} image={tiktokLogo} />
          <Social linkTo={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"} image={steamLogo} />
    
        </div>
      

        <img class="game-logo" src={ehgLogo}></img>



      </header>
      <div className='primary-content'>
        {
          // <img class="game-logo" src={maincapsule}></img>
          contentChunk("Gameplay Trailer",
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ias3KT3sFRE" frameborder="0" allowfullscreen="true"></iframe>
          )
        }


        {
          contentChunkWithVideo("Summary", <div>
            <p>
              <div className="ehg-highlight-font"><strong>Epic Hero Game</strong></div>
              {
                //    is a roguelite/soulslike about a reincarnated superhero who was looking to relax in the afterlife but, due to a certain set of events, ends up helping to save the world from an alien invasion that threatens to destroy it, quite literally.
              }
              {/*    <p className='list-paragraph'>Is a roguelite / soulslike built around the idea of ridiculous power scaling anime genre (Dragonball / One Punch Man), where you can always keep getting stronger, you can stack things together, and your appearance changes as you level up, at its core its a parody (why would changing hairstyle make you stronger?, well this game actively tries to lean into that)
                You play as a custom superhero with many absurd build possibilities, and you are saving the world from total destruction... literally!
              </p>
        */}
              <p className='list-paragraph'>
                Is a physics based roguelite / soulslike where you play as a superhero and its your job to save the world from an alien invasion where the world is getting totally destroyed!<br></br><br></br>
                <p className='list-paragraph2'>
                  As you fight through enemies, player gets stronger during the fight (think of tournament of power in Dragon Ball Super)<br></br><br></br>
                  The game uses physics as a backbone for ridiculous anime powerscaling, where you can physically see a difference in the combat, the more stronger you get.
                </p>
              </p>
            </p>

            {/*
            <ul>
              <li>Physics</li>
              <li>Start as a reborn character</li>
              <li>Fight your way through waves of enemies</li>
              <li>Upgrade your gear</li>


              <li>Become the most powerful character in a comic/anime-inspired world</li>
            </ul>
        */}
          </div>, require("./Assets/ehgvids/physicsbasedcombat.mp4"))

        }
        {
          //<p>insert some stuff about the demo here</p>,

          contentChunkWithImages("Demo",
            <p class="list-paragraph">
              <a href="https://www.dropbox.com/scl/fi/mpq9mcaykpt2xetg2ac2h/Epic-Hero-Game-0.2.zip?rlkey=gqnj155a6o6yf5cbt2dfrzcq1&raw=1" className="download-btn">Download</a>
              <ul class="list-paragraph2">


                <li>If you ever get stuck use the killall command from the debug menu</li>
                <li>No full controller support at the moment</li>
                <li>Some soundeffects are missing</li>

                <li>Game has a lot of room for optimization, recommended to use powerful pc</li>
                <li>Sometimes the transition between active ragdoll and optimized state can be snappy</li>
                <li>You can enable more content in settings => toggle enableExperimentalContent
                  <p className='list-paragraph3'>this option adds more abilities and loot to the game, but this content can be very unbalanced or technically broken.</p></li>

              </ul>
            </p>
            , 3, 1)
        }
        {

          contentChunkWithVideo("Design corner stones",

            <div><pre className='pre-tag-full'>

              <ul>
                <li>Explosions are cool</li>
                <li>It must be ridiculous and over the top</li>
                <li>Make players laugh</li>
                <li>Physics creates unexpected and hilarious situations</li>
                <li>Difficult at first, but player becomes ultra powerful</li>
                <li>Powerscaling Anime inspiration</li>
                <li>Simple to get into but provide a lot of depth in terms of upgrades (treat game as a sandbox)</li>
              </ul>
            </pre>
            </div>,
            require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Gameplay",


            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(0)}></img>
              <pre className='pre-tag-full '>
                <ul class="list-paragraph">
                  {/*        <p>Player spawns into a world and waves of enemies start coming in<br />each wave needs to be totally killed off before the next one comes in</p>

                  <p>Players level up after collecting XP from slain monsters, when the player levels up, they get to choose how to upgrade their character, these upgrades are random</p>
                  <p>After the player completes a boss wave, a loot chest will spawn that will let players upgrade their gear, which provides passive stats</p>
                  <p>After the invasion goes sideways the world physically transforms into a lava wasteland, making the game even more difficult<br></br>
                  At this stage, the mobility of the player will come handy
                  
                  </p>
        */}
                  <p>Gameplay loop can be summarized by the following:</p>
                  <ul>
                    <li>Enemy spawns</li>
                    <li>Player dodges enemy ability</li>

                    <li>Enemy is stunned as a reward for dodging an attack</li>

                    <li>Player hits enemy, eventually kills it, and picks up xp</li>

                    <li>Player levels up, and gets stronger abilities</li>

                    <li>Repeat</li>
                  </ul>
                  <p className=" list-paragraph2">
                    <p>The game starts with an elderly character letting the player know that the world is in grave danger.</p>
                    <p>The NPC teaches the player all the basic game mechanics that the game will use, such as movement, light and heavy attacks, and dodging.</p>
                    <p>The tutorial ends when Harold, one of the minibosses spawns in, and knocks the player down, where the rest of the game takes place.</p>
                    <p>To create a sense of "win against all odds" the player starts with nothing.<br></br> Player will get stronger during the fight, learning new skills, and obtaining new items on the fly.</p>
                    <p>Enemies come in waves and are meant to be silly by design.</p>
                    <p>Early enemies are balanced against the player when they have nothing, to give players the chance to learn the mechanics properly and give a brief moment when players become incredibly powerful at the end of the first arc.</p>
                    <p>Later enemies will be balanced against a max level player in a way where even one mistake can mean game over.</p>
                  </p>
                </ul>

              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunkWithVideo("Character controller",

            <div><pre className='pre-tag-full'>
              <p className='list-paragraph2'>
                All characters are ragdolls, and use procedural leg animation, which makes integrating new attacks / spells / abilities is relatively easy to make look natural.<br></br>
                If there are many ragdolls on screen at the same time, they may use an optimized kinematic state, where the ragdoll is only simulated when its getting hit.<br></br>
                A ragdoll may be configured to look "drunk", which happens to fit quite well the goofy invading aliens.
              </p>
              <p className='list-paragraph'>
                <div className='list-paragraph2'>  Player is controlled by using a third person character controller,
                  <br></br> the game is aiming to be simple on the surface, but have a lot of depth to it.
                  <br></br>This means that all abilities must work using the following variables:
                </div>
                <ul>
                  <li>Autotarget position</li>

                  <li>Fast attack input (release key withing .20 seconds)</li>
                  <li>Heavy attack input (release key after .20 seconds)</li>
                  <li>Camera raycast</li>
                  <li>input being held down</li>


                </ul>
                <div className='list-paragraph2'>                <p>Combat works by automatically targeting nearby enemies,<br></br> the fun part of the game is executing cool moves & seeing how enemies react to it.</p>
                  <p>Camera orbits around the character to let players see their character from all angles,<br></br> but rotating camera is not required for combat, as action should be the thing thats moving, not the camera.</p>
                </div>

                <p>Mobility</p>
                <div className='list-paragraph2'>
                  <p>
                    When player is playing the game, they should feel like they are an actual superhero, this means that you should be able to do wild acrobatics.
                  </p>
                  <p>
                    It will become handy in later stages of the game, when the level transitions into lava mode.
                  </p>
                  This is an area that still needs a lot of work, especially dynamic climbing, it should be smooth in all scenarios.


                </div>
              </p>
              {/*
              <p className='list-paragraph'>Third person controller, as being able to see the physical difference in appearance is big part about the game.
                <br></br>   Combat works by automatically targeting nearest enemy
                <br></br>Camera can orbit around the player, but rotating it is not neccesary for combat, as action should be the thing that is moving, not the camera.
                <div className='btn'>Read more</div></p>
        */     }
            </pre>

            </div>,
            require("./Assets/ehgvids/large sword upgrade.mp4")


          )
        }
        {

          contentChunk("Abilities",

            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(4)}></img>
              <pre className='pre-tag'>
                Abilities are the base building blocks for creating a custom superheroes
                <div className='list-paragraph2'>
                  Only mobility & basic attacks are actually REQUIRED to complete a run.
                  <br></br>Anything else is just to make the game more interesting
                </div>
                <ul>
                  {
                    renderArray([

                      simpleListItemP("Mobility (Left Shift)",
                        <div className='list-paragraph2'>
                          Used to dodge / gapclose enemies<br></br>
                          Upgrades to flight
                        </div>),

                      simpleListItemP("Basic attacks (Left mouse btn or (R))",
                        <div className='list-paragraph2'>
                          You can use either melee, or range basic attacks<br></br>
                          You can use basic attacks in 3 different ways<br></br>
                          - fast attack (no ability upgrades will be applied)<br></br>
                          - Heavy attack (charge time is slower, but heavy upgrades are applied)<br></br>
                          - Heavy attack + Powerup (Same as heavy attack, but powerup upgrades are also applied)

                        </div>),
                      simpleListItemP("Utilities (T)",
                        <div className='list-paragraph2'>
                          Ability that you can change with action wheel (Q)<br></br>
                          Grappling hook, Telekinesis, etc
                        </div>),
                      simpleListItemP("Ultimate attack (F)",
                        <div className='list-paragraph2'>
                          Melee attack with a gap closer
                          - Freezes time
                          - Lets player aim where to knockback enemies
                        </div>),

                      simpleListItemP("Powerup mode (X)",
                        <div className='list-paragraph2'>
                          Powerup increases base stats<br></br>
                          And unlocks powerup only upgrades when active, these will be extremely overpowered by design, such as erasin enemies from existance
                        </div>),

                      /*
                      simpleListItem("Basic melee attack", "1"),
                      simpleListItem("Blocking", "2"),
                      simpleListItem("Movement ability", "Start with a roll, used to dodge enemy attacks, eventually upgrades to flight"),
                      simpleListItem("Fire Projectiles", ""),
                      simpleListItem("Gather energy", ""),
                      simpleListItem("Ultimate attack", "Freezes enemies while gapclosing to target, lets player aim where to knock enemies"),
                      simpleListItem("Apeshit mode", "Increase base stats & unlock powerup mode only upgrades, these upgrades are incredibly powerful by design, like being able to erase enemies from existance")
                    */
                    ])
                  }

                </ul>
                {/*
                <div className='btn'>Read more</div>
                */}
              </pre>
              <img className="monster-img" src={fetchMonsterImage(6)}></img>
            </div>
          ,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }


        {

          //contentChunkWithVideo("Progression",
          contentChunk("Progresssion",
            <div className='pre-tag-full' >
              <div className='content-wrapper  level-design'>
                <div className='pre-tag-img '>

                  <img src={require("./Assets/levelup.png")}></img>
                  <img src={require("./Assets/levelup2.png")}></img>
                  {/*      <div className='btn'>Read more</div>
*/}
                </div>
                <div className='pre-tag'>
                  <p className='list-paragraph'>
                    <p >
                      Progression should be visual, when player gets stronger, player / combat should look different
                      <p className='list-paragraph2'>Just like Dragonball has different forms for different power levels.</p>
                    </p>
                    <p className='list-paragraph2'>
                      There should not be a "right way to play", in the ideal world players would come up with wacky builds that i didnt even intend in the beginning.
                      <br></br>
                      <p className='list-paragraph3'>For example, imagine stacking up a lot of health, and then unlocking a passive that turns 10% of your health into damage.
                      </p>

                    </p>

                    <p className='list-paragraph2'>
                      Player progresses through slaying enemies and picking up xp dropped by them, xp gained is based on how difficult the slain monster is configured to be.
                    </p>
                    <p>
                      <p className='list-paragraph2'> When player meets xp threshold, they level up, and get 4 options how to improve their character, these options are:
                      </p>
                      <ul>
                        <li>Heavy attack <br></br>
                          <p className='list-paragraph2'>(only applies during heavy attack)</p></li>

                        <li>New ability <br></br>
                          <p className='list-paragraph2'>General Utilities/Abilities to help survive the fight, but no means required to use</p>
                        </li>

                        <li>Passive
                          <br></br>
                          <p className='list-paragraph2'>These upgrades apply automatically without having to do anything</p>


                        </li>

                        <li>Powerup     <br></br>
                          <p className='list-paragraph2'>These upgrades apply only when powerup is active, designed to be very overpowered</p>

                        </li>
                      </ul>
                    </p>

                    <p>
                      When player beats a bosswave, a loot chest spawns, that gives player gear, that will boost players passive stats:
                      <ul className='list-paragraph2'>
                        <li>Health</li>
                        <li>Max energy</li>
                        <li>Physical Damage</li>

                        <li>Magic Damage</li>

                        <li>Knockback strength</li>

                        <li>Knockback resistance</li>
                        <li>Movement speed</li>

                      </ul>
                    </p>
                    <p>If player manages to knock out an enemy, they player may steal their gear by walking up and interacting with the props.</p>
                    <p>Death mechanics
                      <p className='list-paragraph2'>Dying will be treated as a time rewind to a point before the invasion begins, so most progress will be lost, but some can persist</p>
                      <p className='list-paragraph2'>Things that persist are subject to change based on playtest feedback, but at this time these are the things that can persist between playthroughs:</p>

                      <ul className='list-paragraph2'>
                        <li>
                          Bind up to 3 gear items
                        </li>

                        <li>
                          Utilities
                        </li>


                      </ul>

                    </p>
                  </p>
                  {/*
                {
                  <p>There are 2 different ways to progress in the game, by obtaining new gear, or upgrading abilities</p>
                }
                <p>Gear</p>
                gear upgrades players passive stats
                <ul>
                  <li>Health</li>
                  <li>Max energy</li>
                  <li>Physical Damage</li>

                  <li>Magic Damage</li>

                  <li>Knockback strength</li>

                  <li>Knockback resistance</li>
                  <li>Movement speed</li>

                </ul>


                <p>Heavy basic attack upgrades (stackable):</p>
                <ul>
                  <li>Hitbox size</li>

                  <li>Attack speed</li>

                  <li>Attack amount</li>

                </ul>


                <p className='list-paragraph'>these variables must create a visual difference in the actual gameplay (e.g, giant projectiles, giant swords, insanely fast attacks, etc)</p>


                <p>Mobility upgrades:</p>
                <ul>
                  <li>Dash</li>

                  <li>Flight</li>

                </ul>

                <p>Powerup upgrades:</p>
                <ul>
                  <li>Magnetic projectiles</li>

                  <li>Erase target from existance</li>
                  <li>Dodge all incoming attacks automatically</li>

                </ul>
        
                {/*    <div className='btn'>Read more</div>
        * /}
              </div>
        */
                  }

                </div>
              </div>
            </div>)
        }






        {

          contentChunk("Level design",

            <div className='pre-tag-full' >
              < div className='content-wrapper level-design' >
                {/*
              <img className="monster-img"src={fetchMonsterImage(1)}></img>
        */}
                < div className='pre-tag-img ' >

                  <img src={require("./Assets/ehggallery/1before-destruction.png")}></img>
                  <img src={require("./Assets/ehggallery/2bpost destruction2.png")}></img>
                  {/*      <div className='btn'>Read more</div>
*/}
                </div>
                <div className='pre-tag '>

                  <ul class='list-paragraph'>
                    <li>Levels are medium-sized islands (250x250)<p className='list-paragraph2'>  with a lot of open space to fight in.</p></li>
                    <li>Levels should look fruitful and filled with life.<p className='list-paragraph2'> </p></li>
                    <li>There shouldn't have to be many props<p className='list-paragraph2'> just enough to make it seem like there might be something living there.</p></li>
                    {
                      // <li>Limited amount of props <p className='list-paragraph2'>Every prop on the map should have a purpose, and something can interact with it.</p></li>
                    }
                    <li>Not too much noise<p className='list-paragraph2'></p></li>
                    <li>Seamless world transformations
                      <p className='list-paragraph2'>when the alien invasion goes sideways, the world turns into a wasteland, and water turns into lava, increasing difficulty.
                        <br></br>Any destroyed ground is now potentially fatal.</p></li>
                    <p className='list-paragraph2'>  There are 3 different level states:</p>
                    <ul className='list-paragraph2'>
                      <li>Level 1: Standard (water, grass, mountains), no danger for player
                        <p className="list-paragraph3">Alien invasion begins</p>

                      </li>

                      <li>Level 2: Lava (lava, no grass, mountains), lava applies damage over time to player
                        <p className="list-paragraph3">Invasion is starting to go badly for the player, world turns into ruins</p>


                      </li>

                      <li> Level 3 Cosmic floating island, Instant death if falls without mobility (this is not in demo)


                        <p className="list-paragraph3">World no longer exists, only chunks of land floating in space, but player is still not giving up</p>

                      </li>
                    </ul>

                  </ul>
                  {
                    levelDesignExpanded && <div class='list-paragraph2'>

                    </div>
                  }
                  {/*<div className='btn' onClick={() => {
                    setLevelDesignExpanded(!levelDesignExpanded);

                  }}>Read more</div>*/
                  }
                </div>

                { /*    <img className="monster-img"src={fetchMonsterImage(1)}></img>
*/}
              </div></div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Enemy Design rulebook",


            <div className='content-wrapper'>

              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag '>
                <p>Each enemy will be designed with the goal of destroying as much of the world as possible.</p>

                <p className='list-paragraph2'>  At baseline, enemies should be challenging, and work around this pipeline
                  <ul>
                    <li>  Chase player
                    </li>
                    <li>Alert player that attack is about start
                    </li>
                    <li>Finish attack, if player doesnt physically dodge the attack, enemy may continue with a combo, to punish player further
                    </li>
                  </ul>

                </p>
                Colossal boss (none of these in demo)
                <ul class='list-paragraph list-paragraph2'>
                  <li>Final boss type</li>
                  <li>Size of the entire level</li>

                  <li>Destroys large chunks of the world with simple moves</li>

                  <li>Takes no damage except on the critical spots, player would have to climb on top of them to deal damage to them</li>

                </ul>
                Chunky Boss
                <ul class='list-paragraph list-paragraph2'>
                  <li>Player dodges powerful attack, missing rewards player with a window to fight back</li>
                  <li>Massive environmental damage</li>
                  <li>2-3 different offensive moves</li>
                  <li>dev time ~2 weeks</li>
                </ul>
                Annoying minions
                <ul class='list-paragraph list-paragraph2'>

                  <li>Chase 1 objective (player/healer target)</li>
                  <li>1 Move</li>
                  <li>used as a Break for the player between bosses</li>
                </ul>
                Glass cannon
                <ul class='list-paragraph list-paragraph2'>

                  <li>Deal large amounts of damage to environment</li>
                  <li>Easily taken down</li>
                </ul>
                {
                  enemyDesignExpanded && (<div className="list-paragraph2"><p>

                  </p>

                  </div>)
                }
                {/*
                <div className='btn' onClick={() => {

                  setEnemyDesignExpanded(!enemyDesignExpanded);
                }}>Read more</div>
        */}
              </pre>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Art style",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(0)}></img>
              <pre className='pre-tag'>
                <p>
                  Art style key points
                  <ul>
                    <li>Low poly</li>

                    <li>Comic</li>

                    <li>Clay</li>

                    <li>Childs drawing book</li>

                    <li>Giant eyeballs</li>

                    <li>Players should ask, what even is that thing?</li>

                  </ul>
                </p>
                {
                  // artStyleExpanded && 
                  (<div className='list-paragraph2'>
                    <p>
                      The gameplay is already very loud and noisy, so simple colors end up balancing with that really well.
                      Individual pixels are not as important when it comes to character art, since most of the time they will be flying so fast across the screen, that you cannot see them anyway.
                    </p>
                    <p>
                      Characters are created in blender, by sculpting a high poly model first, and then creating a shrinkwrap low poly model thats used in the game,
                      extra detail is added through a baked normal map.
                    </p>
                    <p>The weirder the monsters look, the better it is.</p>

                  </div>)
                }
                {/*
                <div className='btn' onClick={() => {

                  setArtStyleExpanded(!artStyleExpanded);
                }}>Read more</div>
        */}
              </pre>


              <img className="monster-img" src={fetchMonsterImage(3)}></img>
            </div>,

          )
        }
        {

          contentChunk("Screenshots",
            <div className='gallery'>{images}</div>
          )
        }

        {

          contentChunk("Fan art",
            <div className='gallery'>
              <img className="gallery-image" src={require("./Assets/ehgfanart/fanart1.jpg")}></img>

              <img className="gallery-image" src={require("./Assets/ehgfanart/fanart2.jpg")}></img>
            </div>
          )
        }

        {

          contentChunk("Story",

            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>

                <p class='list-paragraph'>
                  <p>player Character personality is childish, dont take things too seriously, but has a serious side aswell</p>
                  <p className='list-paragraph2'>The game is by no means story driven, but small part of lore exists to explain why enemies are the way they are.</p>

                  <p>The colossal planet-devouring spaghetti monster is on its way<br></br>
                  </p>
                  <p className='list-paragraph2'>there's one problem though, the monster can't quite chew planets in one go. <br></br>
                    So they send a group of interdimensional monsters to blow the planet into atoms.<br></br>
                  </p>

                  {
                    //     <p className='list-paragraph2'> so the monster can consume the planet no problem.</p></p>
                  }
                  <p>The invasion is the 9-5 job for these monsters<br></br>
                    <p className='list-paragraph2'> they don't really want to be there, and they fight carelessly,
                      sometimes even using each other as projectiles just to destroy the world faster.<br></br>
                      A Boss monster might sit down on a beach chair, put on the shades, eat icecream, and watch their minions do their thing.
                    </p></p>

                </p>

              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>
            //  <div className='gallery'>{images}</div>
          )
        }
        {

          contentChunk("Inspiration",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>
                <p class='list-paragraph'>
                  EHG Takes inspiration from videogames and anime, its an amalgamation of things that i'd personally like to see in a videogame, such as
                  <ul className=' list-paragraph2'>
                    <li>Dodging based combat (Dark Souls / Witcher 3)</li>
                    <li>Unique spell crafting (Vampire survivors, Hades)</li>
                    <li>Mobile character controller (Sly Cooper series / Worms 3D)</li>
                    <li>Unpredictable / hilarious nature of game physics (Totally Accurate Battle Simulator)</li>
                    <li>Over the top powerscaling (Dragonball / One Punch Man)</li>
                  </ul>
                </p>
                {/*      <ul>
                  <li>
                    <p>Anime: Dragonball</p>
                  </li>
                  <li>
                    <p>Anime: One Punch Man</p>
                  </li>
                  <li>
                    <p>Game: Totally Accurate Battle Simulator</p>
                  </li>
                  <li>
                    <p>Game: Dark Souls</p>
                  </li>
                  <li>
                    <p>Game: Vampire Survivors</p>
                  </li>
                  <li>
                    <p>Game: Stick figure flash games</p>
                  </li>
                </ul>
        */}
              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>
          )
        }
        {

          contentChunk("Technicals",


            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag '>
                <p className='list-paragraph'>
                  <ul>
                    <li>
                      <p>Unity 2022</p>
                    </li>
                    <li>
                      <p>Ragdolls: modified PuppetMaster</p>
                    </li>

                    <li>
                      <p>IK: Final IK & foot animator</p>
                    </li>

                    <li>
                      <p>Terrain deformation: Modified digger</p>
                    </li>

                    <li>
                      <p>URP (shadergraph & vfxgraph)</p>
                    </li>

                    <li>
                      <p>Custom built character controller</p>
                    </li>

                    <li>
                      <p>Custom built ability system</p>
                    </li>
                  </ul>
                </p>
                {
                  //technicalsExpanded &&
                  <div>
                    <p className='list-paragraph2'>
                      Simplified overview of EHG Code architecture<br></br>
                      (CLARIFICATION; Entity is not related to unity ECS in any way, its built using GameObjects runtime, just a naming convention)<br></br>
                      Codebase & tools have been designed with Code First approach, where most of the actual work behind the game is done in code.
                      <br></br><p>And it needs to be flexible enough to support my wild imagination.</p>
                    </p>
                    <img className="code-architecture" src={require("./Assets/ehg-code-diagram.png")}></img>
                  </div>
                }
                {
                  /*<div className='btn' onClick={() => {
                  setTechnicalsExpanded(!technicalsExpanded);

                }}>Read more</div>
              */
                }
              </pre>

              <img className="monster-img" src={fetchMonsterImage(1)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Team",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag list-paragraph'>
                <ul>
                  <li>
                    Samuli Salonen | <span className='list-paragraph2'>Studio Owner, Programming, Game Design, 3D Modeling, Community manager</span>
                    <br></br><a className='link'href='https://samulisalonen.github.io/'>Portfolio</a>
                  </li>

                  <li>
                    Marcus Rose |<span className='list-paragraph2'> Level Design, General assistant</span>
                  </li>
                  <li>
                    Joona lätti | <span className='list-paragraph2'>(trailer) Music</span>
                  </li>
                  <li>
                    Unity Asset Store | <span className='list-paragraph2'>Animations, Textures, particles and various plugins</span>
                  </li>
                </ul>
              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>

          )
        }
        {

          contentChunk("Roadmap",

            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>
                Short term development


                <ul className=' list-paragraph2'>
                  <li>Add sound effects</li>

                  <li>Improve physical prop stability</li>

                  <li>Smoother Active ragdoll to optimized state transition</li>
                  <li>Improve game balancing</li>

                  <li>Iron out all current prototype abilities / enemies and make them playable</li>

                  <li>Polish dynamic climbing so its not as janky</li>
                  <li>Bosses specifically designed for the lava stage</li>
                  <li>Steam build</li>

                  <li>Steam Achievements</li>
                  <li>Leaderboards</li>
                  <li>Full controller support</li>

                  <li>General optimization</li>

                </ul>

              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>
            //  <div className='gallery'>{images}</div>
          )
        }
        {

          contentChunk("Budget",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>
                <div className=' list-paragraph2'>
                  please email me at </div>salonen.samuli1@gmail.com
                <div className=' list-paragraph2'> if you wish to get access to the budget information.
                </div>

              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>

          )
        }

        {

          contentChunk("Marketing",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>

              <pre className='pre-tag list-paragraph'>
                <ul>

                  <li>
                    Twitch development livestream
                  </li>
                  <li>
                    Funny / ridiculous gameplay clips
                  </li>
                  <li>
                    Devlogs about things that i learned about game development
                  </li>

                </ul>

                <ul>

                  <li>
                    Steam wishlists: 1506 
                  </li>
                  <li>
                    Twitch following: 1600
                  </li>
                  <li>
                    Twitter following: 2000
                  </li>

                </ul>

                <div className=' list-paragraph2'>
                  Game is best suited for people who like to bootup a game a turn their brain off, and smack some aliens with Dragonball / One Punch Man style ridiculous combat.
                  <p><br></br>             <div className=' list-paragraph2'>People who like to experiment with things are most likely find the game most enjoyable, as at its core it is a roguelite, with some souls like elements to keep things interesting.</div>
                  </p>
                  <p>
                    <br></br><div className=' list-paragraph2'>But its not a true souls like where "difficulty" is a feature, rather bosses are hard at first to create sense of progression when you finally do get strong.</div>
                  </p>

                </div>
              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>

          )
        }
        {

        }
        {

          //            content
        }
        { }
      </div >



    </div >
  );
}

export default App;
