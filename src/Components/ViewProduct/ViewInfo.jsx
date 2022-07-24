import './ViewInfo.css'
import React, { Component, useRef, useState } from 'react'
import Web3 from 'web3'
import Ecommerce from '../../abi/AddProduct'

class ViewInfo extends React.Component {
  async componentWillMount() {
    console.log(
      'componentWillMount() : component/window gets loaded and calling ',
    )
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    //MetaMask injects a global API into websites visited by its users at window.ethereum
    console.log(
      'loadWeb3 : MetaMask injecting a global API into websites visited by its users at window.ethereum ',
    )
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    //(Also available at window.web3.currentProvider for legacy reasons)
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      )
    }
  }

  async loadBlockchainData() {
    console.log(
      'loadBlockchainData() : with the help of metamask calling smart contract methods.',
    )
    const web3 = window.web3

    // Load account from metamask
    const accounts = await web3.eth.getAccounts()
    console.log('Metamask Account : ', accounts)

    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    console.log('network id :', networkId)
    this.setState({ networkId })

    //Gives smart contract Address & block address of smart contract
    const networkData = Ecommerce.networks[networkId]
    this.setState({ networkData })
    console.log(
      'network Data -> smart contract Address & block address of smart contract :',
      networkData,
    )

    if (networkData) {
      //https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html
      //Here we will get object of Smart Contract
      //dvideo allows to interact with smart contracts as if they were JavaScript objects
      const ecommerce = new web3.eth.Contract(
        Ecommerce.abi,
        networkData.address,
      )

      console.log('ecommerce object of smart contract : ', ecommerce)

      this.setState({ ecommerce })
      //Will call a “constant” method total no of video uploaded and execute its smart contract method in the EVM without sending any transaction.
      //Note calling cannot alter the smart contract state.
      const productCount = await ecommerce.methods.productCount().call()
      console.log('toatal no of product available : ', productCount)
      this.setState({ productCount })

      for (var i = productCount; i >= 1; i--) {
        const ecom = await ecommerce.methods.products(i).call()
        // console.log(ecom)
        this.setState({
          productTitle: [...this.state.productTitle, ecom.title],
        })
        this.setState({
          productPrice: [...this.state.productPrice, ecom.price],
        })
        this.setState({
          productImg: [...this.state.productImg, ecom.hash],
        })
      }

      this.setState({ loading: false })
    } else {
      window.alert('DVideo contract not deployed to detected network.')
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      networkData: null,
      ecommerce: '',
      productCount: null,
      productTitle: [],
      productPrice: [],
      productImg: [],
    }
  }

  render() {
    return (
      <>
        <nav className="navBg navbar navbar-expand-lg navbar-dark">
          <a className="BrandName navbar-brand" href="#">
            <span className="flickPlay">
              <i className=" fas fa-compact-disc"></i> D
            </span>
            Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navElements navbar-nav ml-auto">
              <li className="nav-item active">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    id="myInput"
                    onkeyup="myFunction()"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link">User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Balance</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="masthead-viewProducts d-flex">
          <div className="text-center my-auto">
            <h1 className="mb-1">All NEW</h1>
            <h3 className="mb-5">
              <em>5% Off on all new Products</em>
            </h3>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="Movies"
            >
              Shop Now
            </a>
          </div>
          <div className="overlay"></div>
        </div>

        <div id="Movies">
          <div className="Container">
            <h2>Products</h2>
            <div className="container">
              <div className="row">
                {Object.keys(this.state.productTitle).map((title, i) => (
                  <div
                    style={{ marginTop: '5px' }}
                    className="col-md-4 col-sm-6"
                  >
                    <div className="product-grid">
                      <div className="product-image">
                        <a href="#" className="image">
                          <img
                            className="img-1"
                            src={`https://ipfs.infura.io/ipfs/${this.state.productImg[i]}`}
                          />
                          <img
                            className="img-2"
                            src={`https://ipfs.infura.io/ipfs/${this.state.productImg[i]}`}
                          />
                        </a>
                        <ul className="product-links">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart">add</i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{this.state.productTitle[i]}</a>
                        </h3>
                        <div className="price">
                          ETH {this.state.productPrice[i]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer id="footer">
          <p>© Copyright 2020 Flick Play</p>
        </footer>
      </>
    )
  }
}

export default ViewInfo
