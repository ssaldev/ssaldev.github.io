
//require('fs');
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import me from './Assets/me.png';
import ehgFace from './Assets/emoji.png';
import youtubeLogo from './Assets/youtube.png';
import ehgBackground from './Assets/scr2_upscaled.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import ehgLogo from './Assets/ehglogo.png';
import maincapsule from './Assets/maincapsule (1).jpg';


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
  return <p><p className='list-title'>{title}</p> <p className='list-paragraph'>{description}</p></p>

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
        </div>


        <img class="game-logo" src={ehgLogo}></img>



      </header>
      <div className='primary-content'>
        {
          // <img class="game-logo" src={maincapsule}></img>
          contentChunk("Trailer",
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ias3KT3sFRE" frameborder="0" allowfullscreen></iframe>
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
                Is a physics driven roguelite / soulslike where you play as a superhero and its your job to save the world from an alien invasion where the world is getting totally destroyed!<br></br><br></br>
                As you fight through enemies, player gets stronger during the fight (think of tournament of power in Dragon Ball Super)<br></br><br></br>
                The game uses physics as a backbone for ridiculous anime powerscaling, where you can physically see a difference in the combat, the more stronger you get.

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
              <a href="https://www.dropbox.com/scl/fi/fx1szv1hr8nge54r4r2yz/fd-2.zip?rlkey=9gvoy4jk361yj1m0fgb4qdl21&raw=1" className="download-btn">Download</a>
              <ul>
                <li>You can most likely break the game if you try</li>

                <li>Some abilities are still in prototype stage</li>

                <li>if you ever get stuck use the killall command from the debug menu</li>
                <li>no full controller support</li>
              </ul>
            </p>
            , 0, 1)
        }
        {

          contentChunkWithVideo("Design corner stones",

            <div><pre className='pre-tag-full'>

              <ul>
                <li>Things must explode</li>
                <li>It must be ridiculous and over the top</li>
                <li>stupid AI is a feature</li>
                <li>Physics creates unexpected and hilarious situations</li>
                <li>Difficult at first, but player becomes ultra powerful</li>
                <li>Powerscaling Anime inspiration</li>
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
                <ul class="list-paragraph ">
                  {/*        <p>Player spawns into a world and waves of enemies start coming in<br />each wave needs to be totally killed off before the next one comes in</p>

                  <p>Players level up after collecting XP from slain monsters, when the player levels up, they get to choose how to upgrade their character, these upgrades are random</p>
                  <p>After the player completes a boss wave, a loot chest will spawn that will let players upgrade their gear, which provides passive stats</p>
                  <p>After the invasion goes sideways the world physically transforms into a lava wasteland, making the game even more difficult<br></br>
                  At this stage, the mobility of the player will come handy
                  
                  </p>
        */}

                  <p>The game starts with an elderly character letting the player know that the world is in grave danger.</p>
                  <p>The NPC teaches the player all the basic game mechanics that the game will use, such as movement, light and heavy attacks, and dodging.</p>
                  <p>The tutorial ends when Harold, one of the minibosses spawns in, and knocks the player down, where the rest of the game takes place.</p>
                  <p>To create a sense of "win against all odds" the player starts with nothing. Players will get stronger during the fight, learning new skills, and obtaining new items on the fly.</p>
                  <p>Enemies come in waves and are meant to be silly by design.</p>
                  <p>Early enemies are balanced against the player when they have nothing, to give players the chance to learn the mechanics properly and give a brief moment when players become incredibly powerful at the end of the first arc.</p>
                  <p>Later enemies will be balanced against a max level player in a way where even one mistake can mean game over.</p>
                </ul>

              </pre>
              <img className="monster-img" src={fetchMonsterImage(2)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunkWithVideo("Player controller",

            <div><pre className='pre-tag-full'>
              <p className='list-paragraph'>
                Player is controlled by using a third person character controller,
                <br></br> the game is aiming to be simple on the surface, but have a lot of depth to it.
                <br></br>This means that all abilities must work using the following variables

                <ul>
                  <li>Autotarget position</li>

                  <li>Fast attack input (release key withing .20 seconds)</li>
                  <li>Heavy attack input (release key after .20 seconds)</li>
                  <li>input being held down</li>


                </ul>
                <div className='list-paragraph2'>                <p>Combat works by automatically targeting nearby enemies,<br></br> the fun part of the game is executing cool moves & seeing how enemies react to it</p>
                  <p>Camera orbits around the character to let players see their character from all angles, but rotating camera is not required for combat, as action should be the thing thats moving, not the camera</p>
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
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>
                Abilities are the base building blocks for creating a custom superheroes
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
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }


        {

          //contentChunkWithVideo("Progression",
          contentChunk("Progresssion",
            <div className='content-wrapper  level-design'>
              <div className='pre-tag-img '>

                <img src={require("./Assets/levelup.png")}></img>
                <img src={require("./Assets/levelup2.png")}></img>
                {/*      <div className='btn'>Read more</div>
*/}
              </div>
              <div className='pre-tag'>
                <p className='list-paragraph'>
                  <p>
                    Player progresses through slaying enemies and picking up xp dropped by them, xp gained is based on how difficult the slain monster is configured to be.
                  </p>
                  <p>
                    When player meets xp threshold, they level up, and get 4 options how to improve their character, these options are:
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
                    <ul>
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

                    <ul>
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
            </div>)
        }






        {

          contentChunk("Level design",


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
                  <li>Levels are medium-sized islands<p className='list-paragraph2'>  with a lot of open space to fight in.</p></li>
                  <li>In the beginning,<p className='list-paragraph2'> the levels should look fruitful and filled with life.</p></li>
                  <li>There shouldn't have too many props,<p className='list-paragraph2'> but just enough to make it seem like there might be someone living there.</p></li>
                  <li>Limited amount of props <p className='list-paragraph2'>also means that every prop on the map should have a purpose, and something can interact with it.</p></li>
                  <li>Eventually, as stronger aliens come in<p className='list-paragraph2'>, and the alien invasion goes sideways, the world turns into a wasteland, and water turns into lava, increasing difficulty.</p></li>
                  <li>Any destroyed ground is now potentially fatal.</li>
                </ul>

                {/*      <div className='btn'>Read more</div>
        */}
              </div>

              { /*    <img className="monster-img"src={fetchMonsterImage(1)}></img>
*/}
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Enemy Design rulebook",


            <div className='content-wrapper'>

              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag '>
                <p>Each enemy will be designed with the goal of destroying as much of the world as possible.</p>
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
                    At baseline, enemies should be challenging, and work around this pipeline
                    1. chase player
                    2. alert player that attack is about start
                    3. finish attack, if player doesnt physically dodge the attack, enemy may continue with a combo, to punish player further

                  </p>

                  </div>)
                }
                <div className='btn' onClick={() => {

                  setEnemyDesignExpanded(!enemyDesignExpanded);
                }}>Read more</div>
              </pre>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
            </div>,
            //   require("./Assets/ehgvids/9001 round 2.mp4")


          )
        }
        {

          contentChunk("Art style",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
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
                  artStyleExpanded && (<div className='list-paragraph2'><p>
                    Characters are created in blender, by sculpting a high poly model first, and then creating a shrinkwrap low poly model thats used in the game,
                    extra detail is added through a baked normal map.
                  </p>
                    <p>The weirder the monsters look, the better it is</p>

                  </div>)
                }
                <div className='btn' onClick={() => {

                  setArtStyleExpanded(!artStyleExpanded);
                }}>Read more</div>
              </pre>


              <img className="monster-img" src={fetchMonsterImage(1)}></img>
            </div>,

          )
        }
        {

          contentChunk("Screenshots",
            <div className='gallery'>{images}</div>
          )
        }
        {

          contentChunk("Story",

            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag'>

                <p class='list-paragraph'>
                  <p>player Character personality is childish, dont take things too seriously, but has a serious side aswell</p>
                  <p className='list-paragraph2'>The game is by no means story driven, but small part of lore exists to explain why enemies are the way they are</p>

                  <p>The colossal planet-devouring spaghetti monster is on its way,<br></br>
                    <p className='list-paragraph2'>there's one problem though, the monster can't quite chew planets in one go.</p></p>
                  <p>So they send a group of interdimensional monsters to blow the planet into atoms,<br></br>
                    <p className='list-paragraph2'> so the monster can consume the planet no problem.</p></p>
                  <p>The invasion is the 9-5 job for these monsters they don't really want to be there, and they fight carelessly,<br></br>
                    <p className='list-paragraph2'>  sometimes even using each other as projectiles just to destroy the world faster.</p></p>

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
                    <li>Dodging based combat (Dark Souls)</li>
                    <li>Unique spell crafting (Vampire survivors, Hades)</li>
                    <li>Mobile character controller (Sly Cooper series)</li>
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
                  technicalsExpanded && <div>

                  </div>
                }
                {/*      <div className='btn' onClick={() => {
                  setTechnicalsExpanded(!technicalsExpanded);

                }}>Read more</div>

        */}
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
                    Samuli Salonen | Studio Owner, Programming, Game Design, 3D Modeling, Community manager

                  </li>

                  <li>
                    Marcus Rose | Level Design, General assistant
                  </li>
                  <li>
                    Joona lätti | Music
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
                Short term development (2-3 months) roadmap
                <ul className=' list-paragraph2'>
                  <li>Improve physical prop stability</li>

                  <li>Smoother Active ragdoll to optimized state transition</li>
                  <li>Iron out all current prototype abilities and make them playable</li>
                  <li>Polish dynamic climbing so its not as janky</li>
                  <li>Bosses specifically designed for the lava stage</li>
                  <li>Improve game balancing</li>

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

          contentChunk("Target Market",
            <div className='content-wrapper'>
              <img className="monster-img" src={fetchMonsterImage(1)}></img>
              <pre className='pre-tag list-paragraph'>
                <div>
                  Game is best suited for people who like to bootup a game a turn their brain off, and smack some aliens with Dragonball / One Punch Man style ridiculous combat.
                  <p><br></br>             <div className=' list-paragraph2'>People who like to experiment with things are most likely find the game most enjoyable, as at its core it is a roguelite, with some souls like elements to keep things interesting,</div>
                  </p>
                  <p>
                    <br></br><div className=' list-paragraph2'>but its not a true souls like where "difficulty" is a feature, rather bosses are hard at first to create sense of progression when you finally do get strong.</div>
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
