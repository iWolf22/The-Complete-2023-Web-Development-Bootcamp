image_index = 0

var symphony_strips = {
    image: "carousel-images/carousel-photo-1.jpg",
    caption: `Shad Carleton Design Group Two's Prototype "Symphony Strips"`
}

var moutain_biking = {
    image: "carousel-images/carousel-photo-2.jpg",
    caption: `Mountain biking action shot`
}

var bowling = {
    image: "carousel-images/carousel-photo-3.jpg",
    caption: `Bowling with school friends`
}

var frisbee = {
    image: "carousel-images/carousel-photo-4.jpg",
    caption: `WCI's school ultimate frisbee team`
}

var hockey = {
    image: "carousel-images/carousel-photo-5.jpg",
    caption: `Waterloo wolves rep hockey team`
}

var pink_donut = {
    image: "carousel-images/carousel-photo-6.jpg",
    caption: `3D modeled pink donut made using blender`
}

index_list = [symphony_strips, moutain_biking, bowling, frisbee, hockey, pink_donut]

function carousel_slider(direction) {
    if (direction == "left") {
        image_index -= 1;
    }
    if (direction == "right") {
        image_index += 1;
    }
    if (image_index < 0) {
        image_index = index_list.length - 1;
    }
    console.log(index_list.length - 1)
    if (image_index > index_list.length - 1) {
        image_index = 0;
    }

    document.getElementById("carousel-picture").src = index_list[image_index].image;
    document.getElementById("carousel-writing").innerHTML = index_list[image_index].caption;
    document.getElementById("carousel-number").innerHTML = (image_index + 1) + "/" + index_list.length;
}