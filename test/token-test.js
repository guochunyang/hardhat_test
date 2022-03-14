const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Token Contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {

        // 获取第一个 account
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});

describe("Transactions", function () {
    it("transfer", async function () {
        // 获取第一个 account
        const [owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        // owner -> addr1
        await hardhatToken.transfer(addr1.address, 50);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

        // addr1 -> addr2
        await hardhatToken.connect(addr1.address).transfer(addr2, 50);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(0);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    });
});
