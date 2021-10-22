import React from 'react'
import twitter_icon from '../assets/img/twitter.png'
import discord_icon from '../assets/img/discord.png'
import '../assets/css/style.css'


export default function Main() {
    return (
        <>
            <div className="root-container">
                <div className="content-section">
                    <h1>SQUIDS ON SOL</h1>
         <div className="joining">
                        <div className="social-icons">
                            <a href="/"><img src={twitter_icon} alt="twitter" /></a>
                            <a href="/"><img src={discord_icon} alt="discord" /></a>
                        </div>
                    </div>
        <div className="faqs">
                        <span>An collection of <b>2500 code generated</b> squids in from ASCII art.</span><br /><br />
        </div>
         <div className="button">
                        <button>Connect Wallet</button>
                    </div>
                    <div className="img-wrapper"></div>
        <div className="faqs">
                        <h2>FAQ</h2><br /><br />
                        <span> IN PROGRESS</span><br />
        </div>
                    <div className="toadmap">
                        <h2>ROADMAP</h2><br /><br />
                        <p>IN PROGRESS</p> <br />
                        
                    </div>
                </div>
            </div>
        </>
    )
}
