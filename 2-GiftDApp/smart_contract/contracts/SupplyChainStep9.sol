// SPDX-License-Identifier: TSIN
pragma solidity >=0.4.21 <0.9.0;

import "./SupplyChain.sol";

contract SupplyChainStep9 is SupplyChain {
    ///@dev STEP 10 : Shipping of product by delivery hub purchased by customer.
    function receiveByCustomer(uint256 _uid)
        public
        shippedByDeliveryHub(_uid)
        verifyAddress(products[_uid].customer)
    {
        require(hasCustomerRole(msg.sender));
        products[_uid].owner = msg.sender;
        products[_uid].productState = Structure.State.ReceivedByCustomer;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByCustomer(_uid);
    }

}
