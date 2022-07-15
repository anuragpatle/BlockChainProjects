// SPDX-License-Identifier: TSIN
pragma solidity >=0.4.21 <0.9.0;

import "./SupplyChain.sol";

contract SupplyChainStep3 is SupplyChain {
    ///@dev STEP 3 : Shipping of purchased product to Third Party.
    function shipToThirdParty(uint256 _uid)
        public
        verifyAddress(products[_uid].manufacturer.manufacturer)
    {
        require(hasManufacturerRole(msg.sender));
        products[_uid].productState = Structure.State.ShippedByManufacturer;
        productHistory[_uid].history.push(products[_uid]);

        emit ShippedByManufacturer(_uid);
    }
}
