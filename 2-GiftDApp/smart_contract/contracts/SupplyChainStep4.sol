// SPDX-License-Identifier: TSIN
pragma solidity ^0.8.0;

import "./SupplyChain.sol";

contract SupplyChainStep4 is SupplyChain {
    //@dev STEP 4 : Received the purchased product shipped by Manufacturer.
    function receiveByThirdParty(
        uint256 _uid,
        string memory thirdPartyLongitude,
        string memory thirdPartyLatitude
    )
        public override
        shippedByManufacturer(_uid)
        verifyAddress(products[_uid].thirdparty.thirdParty)
    {
        require(hasThirdPartyRole(msg.sender));
        products[_uid].owner = msg.sender;
        products[_uid].thirdparty.thirdPartyLongitude = thirdPartyLongitude;
        products[_uid].thirdparty.thirdPartyLatitude = thirdPartyLatitude;
        products[_uid].productState = Structure.State.ReceivedByThirdParty;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByThirdParty(_uid);
    }
}
