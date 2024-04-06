var LinkedIn = {
    name: 'LinkedIn',
    username: 'Joshua Dierickse',
    link: 'https://www.linkedin.com/in/joshua-dierickse-360741207/',
    picture: 'images/LinkedIn-photo.png',
}

var Github = {
    name: 'Github',
    username: 'iWolf22',
    link: 'https://github.com/iWolf22',
    picture: 'images/Github-photo.png',
}

var Replit = {
    name: 'Replit',
    username: 'JoshuaDierickse',
    link: 'https://replit.com/@JoshuaDierickse',
    picture: 'images/Replit-photo.png',
}

var DMOJ = {
    name: 'dmoj',
    username: 'iWolf22',
    link: 'https://dmoj.ca/user/iWolf22',
    picture: 'images/Dmoj-photo.png',
}

var Leetcode = {
    name: 'LeetCode',
    username: 'user2197n',
    link: 'https://leetcode.com/user2197n/',
    picture: 'images/Leetcode-photo.png',
}

var Google1 = {
    name: 'Google',
    username: 'dierj9807@wrdsb.ca',
    link: 'https://www.google.ca/',
    picture: 'images/Google1-photo.png',
}

var Google2 = {
    name: 'Email',
    username: 'joshua.dierickse@gmail.com',
    link: 'https://www.google.ca/',
    picture: 'images/Google2-photo.png',
}

var Discord = {
    name: 'Discord',
    username: 'Wolff22#7450',
    link: 'https://discord.com/',
    picture: 'images/Discord-photo.png',
}

var Instagram = {
    name: 'Instagram',
    username: 'joshua.dierickse',
    link: 'https://www.instagram.com/joshua.dierickse/',
    picture: 'images/Instagram-photo.png',
}

var Snapchat = {
    name: 'Snapchat',
    username: 'josh_dierickse',
    link: 'https://www.snapchat.com/en-GB',
    picture: 'images/Snapchat-photo.png',
}

var Facebook = {
    name: 'Facebook',
    username: 'Joshua Dierickse',
    link: 'https://www.facebook.com/joshua.dierickse.9/',
    picture: 'images/Facebook-photo.png',
}

var Spotify = {
    name: 'Spotify',
    username: 'Joshua Dierickse',
    link: 'https://www.spotify.com/ca-en/',
    picture: 'images/Spotify-photo.png',
}

var Kijiji = {
    name: 'Kijiji',
    username: 'Joshua',
    link: 'https://www.kijiji.ca/o-profile/1019752776/reviews',
    picture: 'images/Kijiji-photo.png',
}

var Epicgames = {
    name: 'Epic Games',
    username: 'Inferno_Wolf_22',
    link: 'https://www.epicgames.com/',
    picture: 'images/Epicgames-photo.png',
}

var Steam = {
    name: 'Steam',
    username: 'iWolff24',
    link: 'https://store.steampowered.com/',
    picture: 'images/Steam-photo.png',
}

var Riot = {
    name: 'Riot Games',
    username: 'iWolf22#6127',
    link: 'https://www.riotgames.com/en',
    picture: 'images/Riotgames-photo.png',
}

var Ps4 = {
    name: 'Playstation',
    username: 'Inferno_Wolf_22',
    link: 'https://www.playstation.com/',
    picture: 'images/Ps4-photo.png',
}

var Chess = {
    name: 'Chess',
    username: 'iWolff22',
    link: 'https://www.chess.com/member/iwolff22',
    picture: 'images/Chess-photo.png',
}

var Supercell = {
    name: 'Super Cell',
    username: 'josh',
    link: 'https://link.clashroyale.com/?clashroyale://supercell_id&p=1df02818-4aa6-4453-b4a8-88729152bacc',
    picture: 'images/Supercell-photo.png',
}

var Youtube = {
    name: 'Youtube',
    username: 'Joshua Dierickse',
    link: 'https://www.youtube.com/channel/UCYeCsfau6soKbjy4NK7ap4g',
    picture: 'images/Youtube-photo.png',
}

var Devpost = {
    name: 'Devpost',
    username: 'Joshua Dierickse',
    link: 'https://devpost.com/joshua-dierickse',
    picture: 'images/Devpost-photo.png',
}

var Twitter = {
    name: 'Twitter',
    username: '@DierickseJoshua',
    link: 'https://twitter.com/DierickseJoshua',
    picture: 'images/Twitter-photo.png',
}

var title1 = "Programming Socials";
var title2 = "Business Profiles";
var title3 = "Social Medias";
var title4 = "Gaming Accounts";

var social_media_list = [[title1, [Github, Replit, DMOJ, Leetcode, Devpost]], [title2, [LinkedIn, Google1, Google2, Kijiji]], [title3, [Instagram, Snapchat, Facebook, Twitter, Youtube, Spotify]], [title4, [Discord, Ps4, Epicgames, Steam, Riot, Chess, Supercell]]]

document.write('<div class="parent-social-media-container">');
for (let j = 0; j < social_media_list.length; j++) {
    if (j == 0) {
        document.write('<p class="info-title">Socials and Accounts</p>');
    }
    document.write('<hr class="alt-color">');
    document.write('<p class="info-title smaller-font">' + social_media_list[j][0] + '</p>');
    for (let i = 0; i < social_media_list[j][1].length; i++) {
        document.write('<div class="social-media-container" onclick="window.open(`' + social_media_list[j][1][i].link + '`, `_blank`)" style="cursor: pointer;">');
        document.write('<div class="flex-parent jc-center">');
        document.write('<p class="social-media-text">' + social_media_list[j][1][i].name + '</p>');
        document.write("</div>");
        document.write('<img class="social-media-images" src=' + social_media_list[j][1][i].picture + ' alt="social media logos">');
        document.write('<div class="flex-parent jc-center">');
        document.write('<p class="social-media-text social-media-text-small">' + social_media_list[j][1][i].username + '</p>');
        document.write("</div>");
        document.write("</div>");
    }
}
document.write('</div>');