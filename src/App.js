import React, {useState} from "react";
import './App.css';
import Header from './components/header';
import Users from './components/users';
import Board from "./components/board";
import Home from "./components/home";
import {BrowserRouter as Router, Route, Link, Routes,} from 'react-router-dom';
import tic from '../src/tic-tac-toe.svg';
import user from '../src/user.svg';
import home from '../src/home.svg';
import { useEffect, useRef } from 'react';
export default function App() {

    function moreInfo(){
        const main_btn = document.querySelector('.main-btn');
        const second_btn = document.querySelector('.second-btn')
        const third_btn = document.querySelector('.third-btn')
        const first_btn = document.querySelector('.first-btn')
        if (main_btn.classList.contains('open')){
            main_btn.classList.remove('open')
            third_btn.style.cssText= "margin-bottom:0";
            second_btn.style.cssText= "margin-bottom:0";
            first_btn.style.cssText= "margin-bottom:0";
        }
        else{
            main_btn.classList.add('open');
            third_btn.style.cssText= "margin-bottom:65px";
            second_btn.style.cssText= "margin-bottom:125px";
            first_btn.style.cssText= "margin-bottom:185px";
        }
    }
    return (
    <>
      <Header title="Тут должно отображаться название страницы но я не понял как это сделать"/>
        <main>

            <div className="btn-wrapper">


                        <div className="third-btn"><Link to="/" className="btn-img-wrapper"><img src={home} alt="home" className="btn-image"/></Link></div>
                        <div className="first-btn"><Link to="tick" className="btn-img-wrapper"><img src={tic} alt="tic-tac-toe-img" className="btn-image"/></Link></div>



                        <div className="second-btn"><Link to="users" className="btn-img-wrapper"><img src={user} alt="user-img" className="btn-image"/></Link></div>


                <div className="main-btn" onClick={moreInfo}>
                    <div className="first-part-X"></div>
                    <div className="second-part-X"></div>
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/tick" element={<Board />}/>
                <Route exact path="/users" element={<Users />}/>



            </Routes>
        </main>


    </>

  );

}


