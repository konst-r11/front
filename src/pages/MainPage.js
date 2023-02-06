import React, {useState, useEffect} from "react";
import Codeform from './../components/CodeForm.js';
import styles from './../../src/App.css';
import TryForm from "../components/TryForm.js";

function MainPage() {
  
//   const [data, setData] = useState([{}])

//   useEffect(() => {
//     fetch("/api", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify({request: "извини меня, дружище.. ну прости меня, дурака.. "})
//     }).then(res => 
//       res.json()
//     ).then(data => {
//       setData(data);
//     });
//   });

  return (
 
    // <><div>
    //       {(typeof data.response === "undefined") ? <p>Loading...</p>
    //           : data.response.map(v => <p>{v}</p>)}
    //   </div>
    
    <>
    <div className='wrap'>
              <div className="header">
                  <div className=" container ">
                      <div className=" row ">
                          <div className=" span12 col-sm-12 hidden-xs"><br /></div>
                          <div className=" span6 col-md-6">
                              <div className="branding">
                                  <div className="branding-logo">
                                      <img className="img-responsive" src={"/AI.png"} width="100" height="100" alt="logo"></img>
                                      <span className='logo'>Safest<span className="logo-net">Net</span></span>
                                  </div>
                                  <h3 className="summary">Современная защита от спама</h3>
                              </div>

                              <pre className="text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow  items-center">
                                <span className="yellow">npm</span> <span className="white">install safestnet</span>
                              </pre>
                              {/* <Codeform buttons={{ npm: (<span><span className='text-warning'>npm</span> install safestnet</span>), pip: (<span className='text-center'><span className='text-warning'>pip</span> install safestnet</span>), yarn: (<span className='text-center'><span className='text-warning'>yarn</span> add safestnet</span>) }}>
                              </Codeform> */}
                              {/* <div className="chose-block install">
        <div className="buttons border-bottom">
        <button onClick={() => {let e = document.querySelector(".chose-block>div[class='text']"); changetext(e, "<span class='text-warning'>npm</span> install safernet");}}>npm</button>
        <button onClick={() => changetext(document.querySelector(".chose-block>div[class='text']"), "<span class='text-warning'>yarn</span> add safernet")}>yarn</button>
        <button onClick={() => changetext(document.querySelector(".chose-block>div[class='text']"), "<span class='text-warning'>pip</span> install safernet")}>pip</button>
        </div>

        <div className="text">
        
        </div>
    </div> */} 
                          </div>
                          <div className=" span6 col-md-6">
                              <div className="branding sample">
                                  <br className="visible-xs visible-sm" />
                                  <h4 className="tag">Простой и быстрый в освоении инструмент</h4>
                                  <pre className="text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow items-center">
                                  <span className="purple">import</span> <span className="light-blue">Safestnet</span> <span className="purple">from</span> <span className="poopy">&apos;safestnet&apos;</span><span className="white">;</span>
                                    <br /><br /><span className="yellow">(</span><span className="blue">async</span> <span className="purple">(</span><span className="purple">)</span> <span className="blue">=&gt;</span> <span className="purple">{'{'}</span>
                                    <br />{'   '}<span className="blue">let</span><span className="light-blue"> nl</span> <span className="white">=</span><span className="purple"> await</span> <span className='light-blue'>Neuralnet</span><span className='white'>.</span><span className="light-yellow">connect</span><span className="yellow">(</span><span className="yellow">)</span><span className="white">;</span>
                                    <br />{'   '}<span className="light-blue">console</span><span className="white">.</span><span className="light-yellow">log</span><span className="yellow">(</span><span className="purple">await</span><span className="light-blue"> nl</span><span className="white">.</span><span className="light-yellow">check</span><span className="yellow">(</span><span className="poopy">&apos;Привет, мир!&apos;</span><span className="yellow">)</span><span className="yellow">)</span><span className="white">;</span>
                                    <br /><span className="purple">{'}'}</span><span className="yellow">)</span><span className="yellow">(</span><span className="yellow">)</span><span className="white">;</span>
                                  </pre>
                                  {/* <Codeform buttons={{
                                      JavaScript: (<span><pre><span className="purple">import </span><span className="light-blue">Neuralnet</span> <span className="purple">from</span> <span className="poopy">&apos;neuralnet&apos;</span>
                                          <br /><br /><span className="blue">let</span><span className="light-blue"> nl</span> <span className="white">=</span><span className="purple"> await</span> <span className='light-blue'>Neuralnet</span><span className='white'>.</span><span className="light-yellow">access</span><span className="yellow">(</span>key<span className="yellow">)</span>
                                          <br /><span className="hs-varid">p</span> <span className="hs-conop">:</span> <span className="hs-varid">filterPrime</span> <span className="hs-keyglyph">[</span><span className="hs-varid">x</span> <span className="hs-keyglyph">|</span> <span className="hs-varid">x</span> <span className="hs-keyglyph">&lt;-</span> <span className="hs-varid">xs</span><span className="hs-layout">,</span> <span className="hs-varid">x</span> <span className="hs-varop">`mod`</span> <span className="hs-varid">p</span> <span className="hs-varop">/=</span> <span className="hs-num">0</span><span className="hs-keyglyph">]</span></pre></span>), Python: (<span><span className='text-warning'>pip</span> install safernet</span>)
                                  }}>
                                  </Codeform> */}

                                  <div title="This example is contrived in order to demonstrate what Haskell looks like, including: (1) where syntax, (2) enumeration syntax, (3) pattern matching, (4) consing as an operator, (5) list comprehensions, (6) infix functions. Don't take it seriously as an efficient prime number generator." className="code-sample">

                                  </div>
                              </div>
                              <div className="row" id="get-started-button">
                                  <div className="span12 col-sm-12" style={{ paddingTop: "0px" }}>
                                      <br />
                                      <p className="text-center">
                                          <a href="#quickstart" className="btn btn-lg btn-primary" style={{ fontSize: "1.5em", backgroundColor: "rgb(92, 82, 133)" }}>Использовать</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <br></br>


              <div className='pattern-bg'>
                  <div className=" container ">
                      <div className=" row ">
                          <div className=" span12 col-sm-12">
                              {/* onclick="tryhaskell.controller.inner.click()"  */}
                              <div className="try">
                                  <div className=" container ">
                                      <div className=" row ">
                                          <div className=" span6 col-sm-6">
                                              <div className='console-wrap'>
                                                  <h2>Попробуйте сами!</h2>
                                                  <div hidden={true} id="cookie-warning" className=" span6 ">
                                                      <div className="alert alert-warning">Необходимо согласие на использование cookie файлов</div>
                                                  </div>
                                                  <TryForm />
                                              </div>
                                          </div>
                                          <div id="guide" className=" span6 col-sm-6"><div className="indent"><h3>Посмотрите как это работает</h3><p>Обратитесь к <code title="Click me to insert &quot;help&quot; into the console." style={{ cursor: "pointer" }}>API</code> чтобы использовать систему в своих проектах</p><p>Или попробуйте окошко слева <small className="note">(или попробуйте кнопки снизу)</small>:</p><p><code title="Click me to insert &quot;23 * 36&quot; into the console." style={{ cursor: "pointer" }}>Токсичный текст</code> или <code title="Click me to insert &quot;reverse &quot;hello&quot;&quot; into the console." style={{ cursor: "pointer" }}>Нормальный текст</code> </p></div></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="main-content px-4 pt-5 my-5 text-center">
                  <h1 className="display-4 fw-bold" id="quickstart">Начните использовать API прямо сейчас!</h1>
              </div>

              <div className="container py-4">
                  <header className="pb-3 mb-4 border-bottom">
                      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-bookmark-fill me2" viewBox="0 0 16 16">
                              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                          </svg>
                          <span className="fs-4">Краткое руководство</span>
                      </a>
                  </header>

                  <div className="p-5 mb-4 bg-light rounded-3 border">
                      <div className="container-fluid py-5 ">
                          <h1 className="display-5 fw-bold">Создайте API ключ</h1>
                          <div className="col-md-8 fs-4">Для полноценного использования сервиса, вам понадобится создать ключ для доступа к SafestNet API. Сделайте это всего в несколько кликов!<br /><p className="text-danger-emphasis"><b>Для данного действия необходимо выполнить вход</b></p></div>
                          <a href="/login" className="btn btn-primary btn-lg" type="button">Войти</a>
                      </div>
                  </div>

                  <div className="row align-items-md-stretch">
                      <div className="col-md-6">
                          <div className="h-100 p-5 text-bg-dark rounded-3">
                              <h2>Используйте API</h2>
                              <p>После получения ключа вы можете воспользоваться API сервиса. Кликните на кнопку, чтобы открыть подробную и достаточно простую документацию</p>
                              <a href="/docs" className="btn btn-outline-light" type="button">Документация</a>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="h-100 p-5 bg-light border rounded-3">
                              <h2>Нет идей?</h2>
                              <p>Посмотрите на примеры использования сервиса SafestNet с подробным разбором кода. Плагины, боты, системы как для новичков, так и для бывалых</p>
                              <a href="/examples" className="btn btn-outline-secondary" type="button">Примеры</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
  )
}

export default MainPage;