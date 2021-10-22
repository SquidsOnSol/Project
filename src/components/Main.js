import React from 'react'
import twitter_icon from '../assets/img/twitter.png'
import discord_icon from '../assets/img/discord.png'
import '../assets/css/style.css'


export default function Main() {
    return (
        <>
            <div className="root-container">
                <div className="content-section">
                    <h1>Squids on Sol</h1>
        <div className="faqs">
                        <h2>An collection of <b>2500 code generated</b> squids in from ASCII art.</h2><br /><br />
        </div>
         <div className="button">
                        <button>Connect Wallet</button>
                    </div>
                    <div className="img-wrapper"></div>
        <div className="faqs">
                        <h2>INFORMATION</h2><br /><br />
                        <span> IN PROGRESS</span><br />
        </div>
        <div className="joining">
                        <div className="social-icons">
                            <a href="/"><img src={twitter_icon} alt="twitter" /></a>
                            <a href="/"><img src={discord_icon} alt="discord" /></a>
                        </div>
                    </div>
                    <div className="faqs">
                        <h2>FAQ</h2><br /><br />
                        <span>WHAT IS THE LAUNCH DATE?</span>
                        <p>2 PM UTC, Octuber 5th 2021</p><br />
                        <span>HOW MANY SQUIDS ARE IN TOTAL?</span>
                        <p>2500</p>
                        <div className="faq-img">
                            <div className="faq-content">
                                <span>WHAT BLOCKCHAIN?</span>
                                <p>SOLANA</p><br />
                                <span>PRICE?</span>
                                <p>0.1 SOL</p>
                            </div>
                        </div>
                        <span>WHAT MARTKETPLACE WILL IT BE AVAILABLE IF I MISS MINT?</span>
                        <p>Magic Eden & solanart </p>
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
