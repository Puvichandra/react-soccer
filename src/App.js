import React, { useState, useEffect } from 'react';
//import {ABI, CONTRACT_ADDRESS} from './config.js'
//import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

import '../src/assets/css/anim.css'
import Roadmap from './components/Roadmap';
import Carsel from './components/Carsel';
import Team from './components/Team';
import Fbottom from './components/Fbottom';
import 'bootstrap/dist/css/bootstrap.min.css'
import logoimg from "../src/assets/img/logosoccer.jpg"
import '../src/assets/css/mq.css'
import '../src/assets/css/timers.css'
//import Navbarcompoent from './components/Navbarcompoent';
import { Container, Jumbotron, Row, Col, Button, Card, InputGroup, Navbar, Nav } from 'react-bootstrap';
import bigInt from 'big-integer';
//import SoccerPunks from './SoccerPunks.json';




function App() {

  //const contractJson = fs.readFileSync(SoccerPunks);
  //Rinkby contract
  //const ABI = [{ "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "MAX_TOKENS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TOKENS_PER_PURCHASE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SOCCER_PROVENANCE", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "flipSaleStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isSaleActive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_count", "type": "uint256" }], "name": "mintPunk", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reserve", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_reserveAmount", "type": "uint256" }], "name": "reserveTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_provenanceHash", "type": "string" }], "name": "setProvenanceHash", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "tokensByOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
  // const ADDRESS = '0x5cb5eb945264b3305a489b843646d5348f38b05e';

 //Mainnet
  const ABI=[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS_PER_PURCHASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SOCCER_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintPunk","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_reserveAmount","type":"uint256"}],"name":"reserveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  const ADDRESS = '0x12c62d66ebe174f30066f2242bda90623e2abf05';



  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  // eslint-disable-next-line
  const [how_many_succulents, set_how_many_succulents] = useState(1)

  const [succulentContract, setSucculentContract] = useState(1)

  // INFO FROM SMART Contract

  const [tokensMinted, setTokensMinted] = useState(0)

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(true)

  const [succulentPrice, setSucculentPrice] = useState(0)
  const [displayPrice, setDisplayPrice] = useState(0)

  const [succulentnftSold, setSucculentnftSold] = useState(0)

  const [show, setShow] = useState(false)
  const [clicks, setClicks] = useState(1)
 
 

  async function signIn() {
    let eInject=false;
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
      eInject=true;
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
      eInject=false;
    }


    // console.log(eInject)
    if (eInject===true) {
    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then((network) => {
            console.log(network);
            if (network !== "main") { alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here") }
          });
        let wallet = accounts[0]
        //console.log(wallet);
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error)
      })
    }
  }



   useEffect(() => {

 signIn()
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const succulentContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setSucculentContract(succulentContract)
    //console.log(succulentContract)

    const salebool = await succulentContract.methods.isSaleActive().call()
   // console.log("saleisActive", salebool)
    setSaleStarted(salebool)


    const totalSupply = await succulentContract.methods.MAX_TOKENS().call()
    //console.log("total supply", totalSupply)
    setTotalSupply(totalSupply)

    const succulentPrice = await succulentContract.methods.price().call()
    setSucculentPrice(succulentPrice)
    setDisplayPrice(succulentPrice / 1000000000000000000)


    const tokensMinted = await succulentContract.methods.totalSupply().call()
    setTokensMinted(tokensMinted)

    var varnftsold = parseInt(totalSupply) - parseInt(tokensMinted)
    setSucculentnftSold(varnftsold)

  }

  function set_howmanysucculents() {
    mintPunk(clicks);

  }


  
  function getAuthorisePrice(how_many_succulents, tSupply, price) {
    let locprice = price;
    let val = 0;
    let totalSupply = Number(tSupply);

    for (var i = 0; i < how_many_succulents; i++) {
      totalSupply = totalSupply + 1
      if (totalSupply > 2499 && totalSupply < 5000 && price !== 3500000000000000) {
        locprice = 35000000000000000;

      }
      else if (totalSupply > 4999 && totalSupply < 7500 && price !== 4500000000000000) {
        locprice = 45000000000000000;
      }
      else if (totalSupply > 7499 && totalSupply < 10000 && price !== 5500000000000000) {
        locprice = 55000000000000000;
      }
      //console.log('locprice', locprice)
      //console.log('valprice', val)


      val = bigInt(val) + bigInt(locprice)
      // console.log('val',val);


    }

    return val;


  }


  async function mintPunk(how_many_succulents) {
    
    if (succulentContract) {

      // const price = Number(succulentPrice) * how_many_succulents
      const price = getAuthorisePrice(how_many_succulents, tokensMinted, succulentPrice)
      //const price=getAuthorisePrice(how_many_succulents,7498,succulentPrice)



      const gasAmount = await succulentContract.methods.mintPunk(how_many_succulents).estimateGas({ from: walletAddress, value: price })
      //console.log("estimated gas", gasAmount)

      //console.log({ from: walletAddress, value: price })

      succulentContract.methods
        .mintPunk(how_many_succulents)
        .send({ from: walletAddress, value: price, gas: String(gasAmount) })
        .on('transactionHash', function (hash) {
          alert("Minting in Process.. Wait for few minutes",  hash)
         
        })
      setShow(!show)
      
    
    } else {
      console.log("Wallet not connected")
    }

  };





  const incrementItem = () => {
    if (clicks < 20) {
      setClicks(clicks + 1);
    } else {
      alert("NFT max limit is 20");
    }

  }
  const decreaseItem = () => {
    if (clicks > 1) {
      setClicks(clicks - 1);
    } else {
      alert("Select atleast one");
    }

  }

  return (

    <div className="App">
     
      <div className="container-fluid" >
        <Navbar bg="white" expand="lg" style={{ zindex: 999, left: 0 }}  >
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logoimg}
                width="100"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                <Nav.Link href="#Mint">Mint</Nav.Link>
                <Nav.Link href="#Team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>




      <section id="home" className="pt-5">
        <Jumbotron fluid className="jcol  py-3" style={{ backgroundColor: '#f2f2f2' }}>


          <Row className="py-5" style={{ backgroundColor: '#f2f2f2', height: "600px" }}>



            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ offset: 2, span: 5 }} style={{ textAlign: 'left' }}>
              <h3 className="mt-3 mb-5" style={{ paddingTop: "50px" }}>
                G O A L !!!!
              </h3>

              <h1 className="mt-2">
                SoccerPunk
              </h1>
              <h1 className=" mt-2">
                Mint Your NFTs
              </h1>

              <Button variant="primary" className="mt-3 text-center px-5 " style={{ borderRadius: "20px" }} href="#Mint"> Mint </Button>

              <div class="container timer me-auto pt-4 ">
                <p id="headline" class=" text-left ps-2 " >Launch Countdown</p>
                <div id="countdown">
                  <ul id="uld">
                    <li><span id="days"></span>days</li>
                    <li><span id="hours"></span>Hrs</li>
                    <li><span id="minutes"></span>Min</li>
                    <li><span id="seconds"></span>Sec</li>
                  </ul>
                </div>
                <div id="content" class="emoji">
                  <span>🥳</span>
                  <span>🎉</span>
                  <span>🎂</span>
                </div>
              </div>

            </Col>
            <Col className="py-5" xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }} style={{ textAlign: 'left' }}>
              <Carsel />

            </Col>

          </Row>

        </Jumbotron>

      </section>



      <Container id="Roadmap" fluid style={{ backgroundColor: "#0b234b", paddingTop: "120px" }}>
        <h2 className=" display-4 text-white py-3"> RoadMap </h2>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <  Roadmap />
      </Container>

      <Container id="Mint" fluid className="bg-primary" style={{ paddingTop: "120px" }}>
        <h2 className=" text-white py-3"> NFT Mint </h2>
        <Row >

          <Col md={12} lg={6} className="mx-auto text-white">

            <h4 className="py-3" >
              Current NFT Price
            </h4>
            <h3 >
              {displayPrice}  ether
            </h3>
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
            <h4 className="py-3">
              NFT Sold
            </h4>

            <h5 >
              {tokensMinted}
            </h5>
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
            <h4 className="py-3" >
              Balance NFT
            </h4>
            <h5 >
              {succulentnftSold}
            </h5>


          </Col>

          <Col md={12} lg={12} xl={6} className="mx-auto py-2  ">
            <Card className="m-3 py-2 rounded-3">
              <Row className="my-auto" >
                <Col md={12} lg={12} xl={6} className="m-auto px-1">
                  <div className="m-auto">

                    <div className="text-center my-auto mx-auto">
                      {!signedIn ?

                        <Button onClick={signIn} variant="outline-danger" style={{ marginLeft:"30px",marginRight:"30px", borderRadius: "20px", fontSize: '15px', fontWeight: 'bold' }} >Connect Wallet with Metamask</Button>
                        :
                        <h5> Wallet is Connected </h5>
                      }

                      {saleStarted ?
                        <h5 style={{paddingTop:"20px"}}>Sale is Active</h5>
                        :
                        <h5 style={{paddingTop:"20px"}}>Sale is not Active</h5>
                      }




                      <InputGroup className="justify-content-center mt-5">
                        <Button style={{ fontSize: '30px' }} className="px-3" onClick={decreaseItem}>-</Button>{' '}
                        <h3 className="px-5 my-auto text-center" id="counterdig" style={{ fontSize: '30px' }} >{clicks}</h3> {' '}
                        <Button className="px-3" style={{ fontSize: '30px' }} onClick={incrementItem}>+</Button>
                      </InputGroup >
                      <p className="py-3">Transactions may take a while</p>


                    </div>


                  </div>

                  <div>

                    {!signedIn ?
                      <Button variant="outline-info" className="mt-5 text-center px-5 " style={{ borderRadius: "20px", fontSize: '15px', fontWeight: 'bold' }} > Not Active </Button>
                      : <div className="">
                        {saleStarted ?
                          <Button variant="primary" className="mt-5 text-center px-5 " style={{ borderRadius: "20px", fontSize: '15px', fontWeight: 'bold' }} onClick={() => set_howmanysucculents()}> Mint </Button>
                          :
                          <h4> Not Active </h4>
                        }
                        <Button onClick={signOut} variant="outline-primary " className="mt-5 mx-5 text-center px-2 " style={{ borderRadius: "20px", fontSize: '15px', fontWeight: 'bold' }} > Sign Out </Button>
                      </div>
                    }



                  </div>
                </Col>
              </Row>

            </Card>
          </Col>





        </Row>

      </Container>

      <div id="Team" style={{ paddingTop: "120px" }}>
        <Team />
      </div>
      <div id="contact" style={{ paddingTop: "120px" }}>
        <Fbottom />
      </div>

      


  





    </div>



  );


}

export default App;
