// SPDX-License-Identifier: TSIN
pragma solidity ^0.8.0;

import "./SupplyChain.sol";

contract SupplyChainStep5 is SupplyChain {
    ///@dev STEP 5 : Purchase of a product at third party by Customer.
    function purchaseByCustomer(uint256 _uid)
        public override
        receivedByThirdParty(_uid)
    {
        require(hasCustomerRole(msg.sender));
        products[_uid].customer = msg.sender;
        products[_uid].productState = Structure.State.PurchasedByCustomer;
        productHistory[_uid].history.push(products[_uid]);

        emit PurchasedByCustomer(_uid);
    }
}
