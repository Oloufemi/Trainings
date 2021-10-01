"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/lib/function");
function fillInfo(name, lastName, age, position, videos) {
    var player = {
        name: name,
        lastName: lastName,
        age: age,
        position: position,
        videos: videos
    };
    return player;
}
function getPlayerlevel(player) {
    var level;
    switch (player.videos) {
        case 1:
            level = player.name + " " + player.lastName + " is at a low level";
            break;
        case 2:
            level = player.name + " " + player.lastName + " is at a medium level";
            break;
        case 3:
            level = player.name + " " + player.lastName + " is at a high level";
            break;
        default:
            level = "The level of the player is unknown";
    }
    return level;
}
var callFuntions = function_1.flow(fillInfo, getPlayerlevel);
console.log(callFuntions('oloufemi', 'ADEKS', 28, 'Forward', 2));
