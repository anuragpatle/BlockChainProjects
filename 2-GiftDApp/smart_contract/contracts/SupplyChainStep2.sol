// SPDX-License-Identifier: TSIN
pragma solidity >=0.4.21 <0.9.0;

import "./SupplyChain.sol";

contract SupplyChainStep2  is SupplyChain {

	///@dev STEP 2 : Purchase of manufactured product by Third Party.
    function purchaseByThirdParty(uint256 _uid) public manufactured(_uid) {
        require(hasThirdPartyRole(msg.sender));
        products[_uid].thirdparty.thirdParty = msg.sender;
        products[_uid].productState = Structure.State.PurchasedByThirdParty;
        productHistory[_uid].history.push(products[_uid]);

        emit PurchasedByThirdParty(_uid);
    }


}


