// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    string public name = "My Hardhat token";
    string public symbol = "MHT";

    uint256 public totalSupply = 1000000;

    // 项目部署人
    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        // 所有金额存放在合约部署人手里
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log(msg.sender, to, amount);
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
