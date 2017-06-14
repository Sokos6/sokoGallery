import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "category": "boats", "caption": "View Boat", "url":"assets/img/boat_01.jpeg"},
    {"id":2, "category": "boats", "caption": "Coast", "url":"assets/img/boat_02.jpeg"},
    {"id":3, "category": "boats", "caption": "View", "url":"assets/img/boat_03.jpeg"},
    {"id":4, "category": "boats", "caption": "Water", "url":"assets/img/boat_04.jpeg"},
    {"id":5, "category": "boats", "caption": "The Dock", "url":"assets/img/boat_05.jpeg"},
    {"id":6, "category": "camping", "caption": "Camping", "url":"assets/img/boat_06.jpeg"},
    {"id":7, "category": "camping", "caption": "Friends", "url":"assets/img/boat_07.jpeg"},
    {"id":8, "category": "camping", "caption": "Top", "url":"assets/img/boat_08jpeg"},
    {"id":9, "category": "camping", "caption": "Trail", "url":"assets/img/boat_09.jpg"},
    {"id":10, "category": "camping", "caption": "Camping", "url":"assets/img/boat_10.jpeg"},
    {"id":11, "category": "camping", "caption": "RV", "url":"assets/img/boat_11.jpg"},
    {"id":12, "category": "camping", "caption": "Hiking", "url":"assets/img/boat_12.jpeg"},
    {"id":13, "category": "library", "caption": "Library", "url":"assets/img/boat_13.jpeg"},
    {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/boat_14.jpeg"},
    {"id":15, "category": "library", "caption": "Saturday", "url":"assets/img/boat_15.jpeg"},
    {"id":16, "category": "library", "caption": "Local", "url":"assets/img/boat_16.jpeg"},
    {"id":17, "category": "library", "caption": "Nice", "url":"assets/img/boat_17.jpeg"}
]
