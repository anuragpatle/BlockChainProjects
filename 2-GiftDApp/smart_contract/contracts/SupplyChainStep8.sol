// SPDX-License-Identifier: TSIN
pragma solidity >=0.4.21 <0.9.0;

import "./SupplyChain.sol";

contract SupplyChainStep8 is SupplyChain {
    ///@dev STEP 7 : Shipping of product by third party purchased by customer.
    function shipByThirdParty(uint256 _uid)
        public
        verifyAddress(products[_uid].owner)
        verifyAddress(products[_uid].thirdparty.thirdParty)
    {
        require(hasThirdPartyRole(msg.sender));
        products[_uid].productState = Structure.State.ShippedByThirdParty;
        productHistory[_uid].history.push(products[_uid]);

        emit ShippedByThirdParty(_uid);
    }
}
