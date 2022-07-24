import './Product.css'
import React, { Component, useRef, useState } from 'react'
import Web3 from 'web3'
import Ecommerce from '../../abi/AddProduct'

class Product extends React.Component {
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
    }
  }
  render() {
    const handleSubmit = (event) => {
      event.preventDefault()

      const pID = event.target.pID.value
      const pName = event.target.pName.value
      const pCategory = event.target.pCategory.value
      const pQuantity = event.target.pQuantity.value
      const pPrice = event.target.pPrice.value
      var pImage = 'QmYy2VGAr1wwvQzA5dBv1AXAFunAWvqo7bHXqivvznPrkq'
      console.log('Checking :', pID)

      if (this.state.networkData) {
        console.log(
          'dvideo: object of smart contract calling uploadVideo method to upload video',
        )
        window.alert('Confirm the transaction')

        this.state.ecommerce.methods
          .uploadVideo(pID, pQuantity, pPrice, pCategory, pImage, pName)
          .send({ from: this.state.account })
          .then(function (receipt) {
            console.log(receipt)
            console.log('confirmation : Video Uploaded to blockchain')
          })
      } else {
        console.log('confirmation : Video Uploaded to blockchain')
      }
    }
    return (
      <div className="form-container-addProducts">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">
            <strong>Add</strong> Product
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pID"
              placeholder="Product ID"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pName"
              placeholder="Product Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pCategory"
              placeholder="Product Category"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pQuantity"
              placeholder="Product Quantity"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pPrice"
              placeholder="Product Price"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="pDiscription"
              placeholder="Product Discription"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="file"
              name="pImage"
              accept="image/*"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="Add Product">
              Add Product
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Product
