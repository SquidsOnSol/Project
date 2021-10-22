import React from 'react'
import twitter_icon from '../assets/img/twitter.png'
import discord_icon from '../assets/img/discord.png'
import faq from '../assets/img/faq.png'
import '../assets/css/style.css'


export default function Main() {
    return (
        <>
            <div className="root-container">
                <div className="content-section">
                    <h1>Squids on Sol</h1>
                    <div className="img-wrapper"></div>
                    <div className="button">
                        <button>Connect Wallet</button>
                    </div>
        <div className="faqs">
                        <h2>INFORMATION</h2><br /><br />
                        <span> LAUNCH DATE?</span><br />
<span> LAUNCH DATE?</span><br />
<span> LAUNCH DATE?</span><br />
        </div>
                    <div className="faqs">
                        <h2>FAQ</h2><br /><br />
                        <span> LAUNCH DATE?</span>
                        <p>2 PM UTC, Octuber 5th 2021</p><br />
                        <span>HOW MANY SOLFROGS IN TOTAL?</span>
                        <p>6969</p>
                        <div className="faq-img">
                            <div className="faq-content">
                                <span>BLOCKCHAIN?</span>
                                <p>SOLANA</p><br />
                                <span>MINT PRICE?</span>
                                <p>0.1 SOL</p>
                            </div>
                        </div>
                        <span>MARTKETPLACE?</span>
                        <p>Magio Eden & solanart </p>
                    </div>
                    <div className="toadmap">
                        <h2>ROAMAP</h2><br /><br />
                        <p>IN PROGRESS</p> <br />
                        
                    </div>
                    <div className="joining">
                        <h2>join the swamp</h2>
                        <div className="social-icons">
                            <a href="/"><img src={twitter_icon} alt="twitter" /></a>
                            <a href="/"><img src={discord_icon} alt="discord" /></a>
                        </div>
                        <h3>inspired by <br /> cryptoadz</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
