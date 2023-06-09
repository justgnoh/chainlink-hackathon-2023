// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the project contract
import "./ProjectContract.sol";

contract ProjectFactory {
    // Event emitted when a new project contract is created
    event ProjectCreated(address projectContractAddress);

    // Create function to deploy a new project contract
    function createProject(
        string memory title,
        string memory description,
        string memory deliverables,
        uint256 startDateEpoch,
        uint256 endDateEpoch,
        address multiSigAddress
    ) external {
        // Deploy a new project contract
        ProjectContract projectContract = new ProjectContract(
            title,
            description,
            deliverables,
            startDateEpoch,
            endDateEpoch,
            multiSigAddress
        );

        // Emit an event with the address of the created project contract
        emit ProjectCreated(address(projectContract));
    }
}
