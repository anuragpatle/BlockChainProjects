// SPDX-License-Identifier: TSIN
pragma solidity >=0.4.21 <0.9.0;

import "./SupplyChain.sol";

contract SupplyChainStep5 is SupplyChain {
    ///@dev STEP 8 : Receiveing of product by delivery hub purchased by customer.
    function receiveByDeliveryHub(
        uint256 _uid,
        string memory deliveryHubLongitude,
        string memory deliveryHubLatitude
    ) public shippedByThirdParty(_uid) {
        require(hasDeliveryHubRole(msg.sender));
        products[_uid].owner = msg.sender;
        products[_uid].deliveryhub.deliveryHub = msg.sender;
        products[_uid].deliveryhub.deliveryHubLongitude = deliveryHubLongitude;
        products[_uid].deliveryhub.deliveryHubLatitude = deliveryHubLatitude;
        products[_uid].productState = Structure.State.ReceivedByDeliveryHub;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByDeliveryHub(_uid);
    }
}
