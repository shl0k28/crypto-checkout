pragma solidity ^0.6.0;

contract Axion {
    
    event PaymentComplete (
        address _from,
        address _to,
        uint256 _amount
    );

    function sendEther(
        address payable _to,
        uint256 _amount
    ) public payable {
        uint256 amount = _amount * 10 ** 18;
        _to.transfer(amount);
        emit PaymentComplete(msg.sender, _to, _amount);
    }
}