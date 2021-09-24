import React,{ useState } from 'react';
import './App.css';
import BillAmount from './components/BillAmount';
import CashAmount from './components/CashAmount';
import Result from './components/Result';

function App() {

  const [cashamount,setcashamount]= useState(null);
  const [isbillentered,setisbillentered]= useState(false);
  const [billamount,setbillamount]= useState(null);
  const [isinvalid,setisinvalid]= useState(false);
  const [open, setOpen] = useState(false);

  return (
<>
  <div className="App">
        <header className="App-header">
          <h1 className="title">
          Enter the <code>bill amount</code> and <code>cash given</code> by the customer and know minimum number of notes to return.
          </h1>
        </header>

        <div className="App-intro">
          <BillAmount 
            isbillentered = {isbillentered}
            setisbillentered = {setisbillentered}
            cashamount = {cashamount}
            setcashamount = {setcashamount}
            isinvalid = {isinvalid}
            setisinvalid = {setisinvalid}
            setbillamount = {setbillamount}
          />

          <CashAmount 
            isbillentered = {isbillentered}
            setcashamount = {setcashamount}
          />

          <Result 
            billamount = {billamount}
            cashamount = {cashamount}
            setisinvalid = {setisinvalid}
            setisbillentered = {setisbillentered}
            isbillentered = {isbillentered}
            open = {open}
            setOpen = {setOpen}
          />
        </div>
      </div>

  <style jsx="true"  >{`
    .App-intro {
    margin: 30px;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    
    footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    footer img {
    margin-left: 0.5rem;
    }
    
    footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    code, button {
    color: inherit;
    background: inherit;
    text-decoration: none;
    }
    
    .title code, .subtitle code {
    color: #0070f3;
    text-decoration: none;
    }
    
    .title code:hover,.subtitle code:hover,
    .title code:focus,.subtitle code:focus,
    .title code:active,.subtitle code:active {
      text-decoration: underline;
    }
    
    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 2rem;
    }

    .subtitle {
      margin: 0px 0px 50px 0px;
      line-height: 1.00;
      font-size: 2rem;
      transform: translate(-20vw,40px);
    }
    
    .title,
    .description,{
      text-align: center;
    }

    .description {
      line-height: 1.5;
      font-size: 1.5rem;
    }

    code {
      border-radius: 5px;
      padding: 0.75rem;
      font-family: Hasklig;
      text-transform: uppercase;
    }
    
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 800px;
      margin-top: 3rem;
    }
    
    .card {
      margin: 1rem;
      flex-basis: 45%;
      padding: 1.5rem;
      text-align: left;
      min-height: 180px;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
    }
    
    .card:hover,
    .card:focus,
    .card:active {
      color: #0070f3;
      border-color: #0070f3;
    }
    .card h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    .card p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
    @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
    }
  `}</style>

  <style jsx="true" global="true">{`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    }
    * {
    box-sizing: border-box;
    }
  `}</style>
</>

);
}

export default App;
