import React from 'react';
import '../styles/AboutMe.css';
import corel from '../image/icons/corel.png';
import ps from '../image/icons/ps.png';
import git from '../image/icons/git.png';
import github from '../image/icons/github.png';
import ror from '../image/icons/ror.png';
import ruby from '../image/icons/ruby.png';
import bootstrap from '../image/icons/bootstrap.png';
import rwd from '../image/icons/rwd.png';
import html5 from '../image/icons/html5.png';
import css3 from '../image/icons/css3.png';
import js from '../image/icons/js.png';
import node from '../image/icons/node.png';
import react from '../image/icons/react.png';
import redux from '../image/icons/redux.png';
import mongo from '../image/icons/mongo.png';
import postgresql from '../image/icons/postgresql.png';

const AboutMe = () => {
  return (
    <div className="container about_me">
      <div className="jello_title">
        <h1>
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>&nbsp;
          <span>m</span>
          <span>e</span>
        </h1>
        <p className="animated_letters">
          <span className="show"><br />
          Do you know this feeling of enthusiasm when you do something that pleases you. You can sit over this for hours, from morning till evening. The need to implement assumptions is more important then the world that surrounds you. This is my attitude towards programming.
          <br /><br /></span>
          <span className="show show1"><span className="highlighted">I</span> try not to stand still, I<span className="highlighted"> love</span> to explore new topics.
          <br /><br /></span>
          <span className="show show2">In addition to <span className="highlighted">programming</span>, I am also interested in computer graphics, animation and video editing.
          <br /><br /></span>
          <span className="show show3">Privately, I am a optimistic bookworm.
          <br /><br /></span>
          <span className="show show4">I like to create new things. You can see my works on&nbsp;
          <a href="https://www.youtube.com/channel/UCH0oK8T2VmR6S6QAX8e3qwA" target="_blank" rel="noopener noreferrer">youtube channel</a>.</span>
        </p>
      </div>
      <div className="skills">
        <h2 className="skills_title">my skills</h2>
        <div className="imgBox imgBox1">
          <img src={corel} alt="logo corel" />
          <img src={ps} alt="logo photoshop" />
        </div>
        <div className="imgBox imgBox2">
          <img src={git} alt="logo git" />
          <img src={github} alt="logo github" />
        </div>
        <div className="imgBox imgBox3">
          <img src={html5} alt="logo html5" />
          <img src={css3} alt="logo css3" />
        </div>
        <div className="imgBox imgBox4">
          <img src={bootstrap} alt="logo bootstrap" />
          <img src={rwd} alt="logo rwd" />
        </div>
        <div className="imgBox imgBox5">
          <img src={js} alt="logo js" />
          <img src={node} alt="logo nodejs" />
        </div>
        <div className="imgBox imgBox6">
          <img src={react} alt="logo react" />
          <img src={redux} alt="logo redux" />
        </div>
        <div className="imgBox imgBox7">
          <img src={ruby} alt="logo ruby" />
          <img src={ror} alt="logo ror" />
        </div>
        <div className="imgBox imgBox8">
          <img src={mongo} alt="logo mongoDB" />
          <img src={postgresql} alt="logo postgreSQL" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;