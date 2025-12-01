// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Crowdfunding {
    enum State { Pending, Success, Failure }

    struct Project {
        address payable owner;
        uint goalAmount;
        uint currentRaisedAmount;
        uint deadline;
        State currentState;
        uint investorCount;
        mapping(address => uint) investments;
    }

    Project[] public projects;
    
    event ProjectCreated(uint indexed projectId, address indexed owner, uint goal);
    event Invested(uint indexed projectId, address indexed investor, uint amount, uint newRaisedAmount);

    function createProject(
        uint _goalAmount,
        uint _durationInSeconds
    ) public {
        uint projectId = projects.length;
        projects.push();

        Project storage newProject = projects[projectId];

        newProject.owner = payable(msg.sender);
        newProject.goalAmount = _goalAmount;
        newProject.currentRaisedAmount = 0;
        newProject.deadline = block.timestamp + _durationInSeconds;
        newProject.currentState = State.Pending;
        newProject.investorCount = 0;
        
        emit ProjectCreated(projectId, msg.sender, _goalAmount);
    }

    function invest(uint _projectId) public payable {
        require(_projectId < projects.length, "Invalid project ID.");
        require(msg.value > 0, "Investment must be greater than zero.");
        
        Project storage project = projects[_projectId];

        require(project.currentState == State.Pending, "Project is not pending.");
        require(block.timestamp < project.deadline, "Funding period has ended.");
        
        uint oldInvestment = project.investments[msg.sender];

        project.investments[msg.sender] += msg.value;
        project.currentRaisedAmount += msg.value;

        if (oldInvestment == 0) {
            project.investorCount++;
        }

        emit Invested(
            _projectId, 
            msg.sender, 
            msg.value, 
            project.currentRaisedAmount
        ); 
    }
}