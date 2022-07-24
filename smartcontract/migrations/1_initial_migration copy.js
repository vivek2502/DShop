const AddProduct = artifacts.require('AddProduct')

module.exports = function (deployer) {
  deployer.deploy(AddProduct)
}
