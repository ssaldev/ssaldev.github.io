import React, { useEffect, useState } from 'react';
const Game = (props) => {
    return (<div class="game-panel">
        {
            //<img src={props.image} class="game-header" />
        }
        <div class="game-video">
            <iframe
                src={props.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div class="game-info">
            <h2 class="game-title">{props.title}</h2>

            <div className="game-tags">
                {props.tags && props.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>

            <p class="game-desc">
                {
                    props.description
                }
            </p>

            <a href={props.link} class="game-btn">View on Steam</a>
        </div>
    </div>)
}
export default Game;