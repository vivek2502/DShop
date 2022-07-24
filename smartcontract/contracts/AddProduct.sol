// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract AddProduct {
  uint public productCount = 0;
  string public name = "Product";
  mapping(uint => Product) public products;
  uint lastUpdated;
  

  struct Product {
    uint id;
    uint productId;
    uint itemsCount;
    uint price;
    string categories;
    string hash;
    string title;
    address author;
  }

  event ProductUploaded(
    uint id,
    uint productId,
    uint itemsCount,
    uint price,
    string categories,
    string hash,
    string title,
    address author
    
  );

  function uploadVideo(uint _productId, uint _itemsCount, uint _price, string memory _categories, string memory _Hash, string memory _title) public {
    
    require(_productId > 0);
    require(_itemsCount > 0);
    require(bytes(_categories).length > 0);
    require(_price > 0);
    require(bytes(_Hash).length > 0);
    require(bytes(_title).length > 0);
    require(msg.sender!=address(0));
        
    // Increment product count
    productCount ++;
    // Add product to the contract
    products[productCount] = Product(productCount, _productId, _itemsCount, _price, _categories, _Hash, _title, msg.sender);
    // Trigger an event
    emit ProductUploaded(productCount, _productId,_itemsCount, _price,_categories, _Hash, _title, msg.sender);
  }
}
