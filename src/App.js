import React, { Component } from 'react';
import bandcamp from './bandcamp.svg';
import fb from './fb.svg';
import spotify from './spotify.svg';
import play from './play.svg';
import close from './close.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg';
import instagram from './instagram.svg';
import bg from './bg.jpg'
import './App.css';

const VIDEO_URL = "https://www.youtube-nocookie.com/embed/mkbd_ULmX_k?controls=0&modestbranding=1&autoplay=1";

class App extends Component {
  constructor () {
  super();
  this.state = {
    isPlaying: false,
  };
}

handlePlayClick = () => {
  this.setState({
    isPlaying: true,
  });
}

getVideo = () => {
  return (
    <div className="video-container">
      <iframe 
        title="Wayfarer Video"
        width="100%" 
        height="100%" 
        src={VIDEO_URL} 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

getIcons = () => {
  const { isPlaying } = this.state;

  if (!isPlaying) {
    return (
      <div className="icons">
        <a href="https://wayfarer.bandcamp.com/"><img src={bandcamp} className="icon" alt="Wayfarer Bandcamp" title="Wayfarer Bandcamp" /></a>
        <a href="https://open.spotify.com/artist/3RZV54dRzoxH5cRuRBntGt?si=jV2-3BOTQjidM5quNVsxyA"><img src={spotify} className="icon" alt="Wayfarer Spotify" title="Wayfarer Spotify" /></a>
        <a href="https://www.instagram.com/wayfarerband/"><img src={instagram} className="icon icon-instagram" alt="Wayfarer Instagram" title="Wayfarer Instagram" /></a>
        <div onClick={this.handlePlayClick}><img src={play} className="icon icon-play" alt="Play Button" title="Play Button"/></div>
        <a href="https://www.facebook.com/wayfarerkw/"><img src={fb} className="icon" alt="Wayfarer Facebook" title="Wayfarer Facebook" /></a>
        <a href="https://twitter.com/Wayfarerband"><img src={twitter} className="icon" alt="Wayfarer Twitter" title="Wayfarer Twitter" /></a>
        <a href="https://www.youtube.com/user/Wayfarerband420"><img src={youtube} className="icon icon-youtube" alt="Wayfarer Youtube" title="Wayfarer Youtube" /></a>
      </div>   
    );
  }

  return (
    <div className="icons icon-close-container">
      <div onClick={this.handleCloseClick}><img src={close} className="icon icon-close" alt="Close Button" title="Close Button"/></div>
    </div>    
  );

}

handleCloseClick = () => {
  this.setState({
    isPlaying: false,
  });
}


  render() {

    const { isPlaying } = this.state;

    const style = {
      background: `url(${bg}) no-repeat`,
      backgroundSize: 'cover',
    };

    const video = isPlaying ? this.getVideo() : '';
    const icons = this.getIcons();

    return (
      <div style={style} className="App">
          {video}
          <header className="header">
            <h1 className="band-title">Wayfarer</h1>
            <h2 className="album-title">Reckless <span className="spring">Spring</span></h2>
          </header>
          {icons}
          <nav className="nav">
            <a className="nav-item" href="https://wayfarerband.tumblr.com/" alt="Blog" title="Blog">Blog</a>
            <a className="nav-item" href="https://wayfarer.bandcamp.com/merch" alt="Store" title="Store">Store</a>
            <a className="nav-item" href="mailto:wayfarerband@gmail.com" alt="Contact" title="Contact">Contact</a>
          </nav> 
      </div>
    );
  }
}

export default App;
