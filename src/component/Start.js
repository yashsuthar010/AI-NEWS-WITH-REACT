import React from 'react';
import company from '../images/company.png'
import background from '../images/background.png'
import card1 from '../images/card 1.png'
import card2 from '../images/card 2.png'
import card3 from '../images/card 3.png'
import card4 from '../images/card 4.png'
import './main.css';
import Newscard from '../CardsPage.js/NewsCards';
import {Grid, Grow } from '@material-ui/core';
import useStyles from './styles.js';
import './cardsHolder.css';




const Start = ({articles, activeArticle}) => {
  const classes = useStyles();

    if(!articles.length){
    return (
        <>

        {/* header section */}
    <header>
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="left flex items-center">
            <div className="branding">
              <img src={company} alt="logo" className="logo" />
            </div>
            <div className="link" style={{marginLeft: "5rem"}}>
              <a className="nav-link nav-link-fade-up" href="#">Home</a>
              <a className="nav-link nav-link-fade-up" href="#">About</a>
              <a className="nav-link nav-link-fade-up" href="#">Services</a>
              <a className="nav-link nav-link-fade-up" href="#">Blog</a>
            </div>
          </div>
          <div className="right ">
            <div>
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </nav>
        <hr className="Line"/>
          
        <div className="hero flex items-center">
          <div className="left flex justify-center">
            <img
              src={background}
              alt="AI image"
              style={{width: "710px", height: "570px", marginTop: "2.8rem"}}
            />
          </div>

          <div className="right">
            {/*  <h6>Artificial Intelligence</h6>  */}
            <h1><span className="h1-tag">A.I.</span></h1>
            <h2>NEWS</h2>
             {/* <p>Let our AI handle it</p>  */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              tenetur. Dolor officia eius eveniet veniam cum, soluta
              reprehenderit fuga est libero obcaecati itaque distinctio.
            </p>
            <div>
              <button className="btn btn-secondary"><b>Start</b></button>
            </div>
          </div>
        </div>
      </div>
    </header>


    {/* body section */}

    <section className="services">
      <div className="container">
        <h1 className="section-heading"><span> Our </span>services</h1>
        <p>let our AI handle it</p>

        <div className="card-wrapper">
          <div className="card" style={{backgroundImage: `url(${card1})`}}>
            <div className="card-content">
              <h2 className="card-title title1">Latest news</h2>
              <p className="card-body" style={{marginTop:"8.5rem"}}>
              Give me the latest news
              </p>
              <a href="#" className="button button1" style={{transition: "all .3s ease"}}>Try saying</a>
            </div>
          </div>
          <div className="card" style={{backgroundImage: `url(${card2})`}}>
            <div className="card-content">
              <h2 className="card-title title2">Categories</h2>
              <ul className="list-container">
                <li>Business, General,</li>
                <li>Entertainment,</li>
                <li>Technology and science,</li>
                <li>Health and care,</li>
                <li>Sports and so on..</li>
                {/* <li>"give me news about Business"</li> */}
                <br/>
                
              </ul>
              <a href="#" className="button button2" style={{transition: "all .3s ease"}}>Try saying</a>
            </div>
          </div>
          <div className="card" style={{backgroundImage: `url(${card4})`}}>
            <div className="card-content">
              <h2 className="card-title title3">Terms</h2>
              <ul className="list-container">
                <li>Bitcoin,</li>
                <li>PlayStation 5,</li>
                <li>Smartphones,</li>
                <li>Donald Trump,</li>
                <li>PC games and so on..</li>
                {/* <li>"give me news about Business"</li> */}
                <br/>
                
              </ul>
              
              <a href="#" className="button button3 " style={{transition: "all .3s ease"}}>Try saying</a>
            </div>
          </div>
          <div className="card" style={{backgroundImage: `url(${card3})`}}>
            <div className="card-content">
              <h2 className="card-title title4">Sources</h2>
              <ul className="list-container">
                <li>CNN, Wired</li>
                <li>BBc News, ABC News</li>
                <li>Buzzfeed, IGN</li>
                <li>TIME, HPSEDC </li>
                <li> and so on..</li>
                {/* <li>"give me news about Business"</li> */}
                <br/>
                
              </ul>
              <a href="#" className="button button4" style={{transition: "all .3s ease"}}>Try saying</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* footer section */}
    <footer>
      <div className="art">
        <div className="content">
          <section >
            <header className="head">Company</header>
            <a href="/" style={{textDecoration: 'none'}}>About</a>
            <a href="/" style={{textDecoration: 'none'}}>Contact US</a>
            <a href="/" style={{textDecoration: 'none'}}>Blog</a>
          </section>
          <section >
            <header  className="head">Development</header>
            <a href="/" style={{textDecoration: 'none'}}>Website</a>
            <a href="/" style={{textDecoration: 'none'}}>Mobile Application</a>
            <a href="/" style={{textDecoration: 'none'}}>UI & UX Design</a>
          </section>
          <section >
            <header  className="head" style={{color: "#ff5f7e"}}>weekly News</header>
            <form action="#">
                <input type="email" placeholder="Your Email here..." id=""/>
                <button className="btn btn-third">subscribe now</button>
              </form>
            <div className="social">
              <i className="fa fa-youtube"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-telegram"></i>
            </div>
          </section>
           
        </div>
      </div>
    </footer>  
        </>
    )
    }

    return(
      <>
      <header className='container-card'>
        <div><img src={company} alt='logo' className='logo-card'/> </div>
        <div className='back'><button className='btn-card'>BACK</button></div>
        <div className='head-card'><h1 className='h1-head'>AI NEWS</h1></div>
      </header>
      <Grow in>
          <Grid className={classes.container} container alignItems='stretch' spacing={3}>


          {articles.map((article , i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
              <Newscard article={article} activeArticle={activeArticle} i={i}/>
              </Grid>
           ))}
              

          </Grid>


      </Grow >
           </>
  )
    
}


export default Start;
