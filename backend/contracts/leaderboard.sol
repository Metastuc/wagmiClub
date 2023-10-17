// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract Router {
    // create an auto-increment counter to track users
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _userCount; // Counter for userCount
    // create a struct for scores/ranking
    struct ranking {
        address user;
        uint256 category;
        uint256 score;
    }

    // create a mapping(counter => scoreStruct)
    mapping (uint256 => ranking) public leaderBoard;
    mapping (address => address) public badgeContracts;
    mapping (address => address) public medalContracts;
    // to update a score, check for the above mapping for an address match
    // then update the score

    // function to update score
    function scoreUpdate(uint256 category, address user, uint256 score) public {
        if (!userExists(user)) {
            leaderBoard[_userCount.current()].user = user;
            leaderBoard[_userCount.current()].category = category;
            leaderBoard[_userCount.current()].score = score;
            _userCount.increment();
        } else {
            for (uint i = 0; i < _userCount.current(); i++) {
                if (leaderBoard[i].user == user) {
                    leaderBoard[i].score += score; 
                }
            }
        }
    }
    // to return the scores for a category run through scores to find the category match
    // then return the scores in an array

    // function to return a leaderboard for a category
    function getLeaderBoard(uint256 category) public view returns(ranking[] memory leaderboard) {
        for (uint i = 0; i < _userCount.current(); i++) {
            if (leaderBoard[i].category == category) {
                uint counter;
                leaderboard[counter] = leaderBoard[i];
                counter++;
            }
        }
    }

    // function to check if the user already exists
    function userExists(address user) internal view returns(bool check) {
        for (uint i = 0; i < _userCount.current(); i++) {
            if (leaderBoard[i].user == user) {
                check == true;
            } else {
                check == false;
            }
        }
    }
}