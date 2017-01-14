pragma solidity ^0.4.0;

contract Project1 {
    address receiver1;
    address receiver2;

    function Project1(address a1, address a2) {
        receiver1 = a1;
        receiver2 = a2;
    }

    function getBalance() returns (uint) {
         return this.balance;
    }

    function sendWei() payable returns (bool) {
		uint256 sendAmount =  msg.value;
		uint256 amount1 = sendAmount / 2;
		uint256 amount2 = sendAmount - amount1;
		bool s1 = receiver1.send(amount1);
		bool s2 = receiver2.send(amount2);
		return s1 && s2;
    }

    function getBalance1() returns (uint256) {
        return receiver1.balance;
    }

    function getBalance2() returns (uint256) {
        return receiver2.balance;
    }

}
