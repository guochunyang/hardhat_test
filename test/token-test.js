const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Token Contract", function () {
    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        // To deploy our contract, we just have to call Token.deploy() and await
        // for it to be deployed(), which happens once its transaction has been
        // mined.
        hardhatToken = await Token.deploy();
    });


    describe("Token Contract", function () {
        it("Deployment should assign the total supply of tokens to the owner", async function () {

            const ownerBalance = await hardhatToken.balanceOf(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("transfer", async function () {
            // owner -> addr1
            await hardhatToken.transfer(addr1.address, 50);
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

            // addr1 -> addr2
            await hardhatToken.connect(addr1).transfer(addr2.address, 50);
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(0);
            expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
        });
    });


});

