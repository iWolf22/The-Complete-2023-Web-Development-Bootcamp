var chess_game = {
    name: 'Java Chess',
    youtube_embed: 'https://www.youtube.com/embed/mo3MB4qB6r8',
    youtube_watch: 'https://www.youtube.com/watch?v=mo3MB4qB6r8',
    github: 'https://github.com/iWolf22/Java-Chess',
    replit: 'https://replit.com/@TintinBS/Chess?v=1',
    website: 'null',
    description: 'This is a fun little chess game a friend and I made for our grade 12 computer science final. It is created with over 2000+ lines of Java code, spread over 6 organised files.<br><br>The multiplayer version of our chess game is currently fully functional with unique piece movements, like pawn promotions, castling, and en passant. Furthermore, utilizing our advanced algorithms the game also has built-in check/checkmate detection and can even tell if a certain position is considered to be a stalemate.',
}

var flappy_bird_game = {
    name: 'Flappy Bird With Pygame',
    youtube_embed: 'https://www.youtube.com/embed/t1157xhHw74',
    youtube_watch: 'https://www.youtube.com/watch?v=t1157xhHw74',
    github: 'https://github.com/iWolf22/Flappy-Bird-Pygame',
    replit: 'https://replit.com/@JoshuaDierickse/Flappy-Bird-40?v=1',
    website: 'null',
    description: 'This is a flappy bird clone I made for a grade 11 communication technology class using the well-known python library Pygame. Although I have created many games in the past, this one is by far the most well-done and polished, which is why I choose to showcase it in my portfolio. If you happen to have some free time I would strongly recommend trying the game for yourself on Replit or checking out the source code on GitHub via the links below.',
}

var symphony_strips = {
    name: 'Symphony Strips Prototype',
    youtube_embed: 'https://www.youtube.com/embed/H51n_LWxLtI',
    youtube_watch: 'https://www.youtube.com/watch?v=H51n_LWxLtI&list=PLVXTFbA6ogSW4xs_EseLQc1wYLO8w1lck&index=5',
    github: 'https://github.com/iWolf22/Symphony_Strips_Program',
    replit: 'null',
    website: 'https://sites.google.com/carleton.shad.ca/symphony-strips/home',
    description: 'During the summer of 2022, I was fortunate enough to attend Shad Carleton where a group of fellow students and I (Design Group 2) were given an entrepreneurship challenge with the theme of "wellness". Design Group 2 and I engineered the "Symphony Strip" prototype, which is a strip of ultrasonic sensors wired to an Arduino microcontroller with piezo speakers to play musical notes. The ingenuity behind Symphony Strips is the strip of sensors can be placed along stairwells or hallways, and as someone walks by the row of sensors, series of musical notes will play!',
}

portfolio_list = [chess_game, flappy_bird_game, symphony_strips]

video_images_sources = [
    'images/Symphony-strips-photo.png',
    'images/Github-photo.png',
    'images/Replit-photo.png',
    'images/Youtube-photo.png'
]

text_sources = [
    'Website',
    'Github',
    'Replit',
    'Youtube'
]

for (let i = 0; i < portfolio_list.length; i++) {
    document.write('<div class="info-container">');
    if (i == 0) {
        document.write('<p class="info-title">Programming Portfolio</p>');
    }
    document.write('<p class="info-title smaller-font">' + portfolio_list[i].name + '</p>');
    document.write('<div class="video-container">');
    document.write('<iframe class="video-format" src="' + portfolio_list[i].youtube_embed + '" title="YouTube video player"></iframe>');
    document.write('<p class="video-text">' + portfolio_list[i].description + '<p/>');
    document.write('</div>');
    document.write('<div class="video-images-format">');
    links_list = [portfolio_list[i].website, portfolio_list[i].github, portfolio_list[i].replit, portfolio_list[i].youtube_watch];
    for (let j = 0; j < 4; j++) {
        if (links_list[j] != 'null') {
            document.write('<div class="video-images-container" onclick="window.open(`' + links_list[j]  + '`, `_blank`)">');
            document.write('<img class="video-images" src="' + video_images_sources[j] + '" alt="' + text_sources[j] + ' Logo Link">');
            document.write('<p class="video-images-text">' + text_sources[j] + '</p>');
            document.write('</div>');
        }
    }
    document.write('</div>');
    document.write('</div>');
}