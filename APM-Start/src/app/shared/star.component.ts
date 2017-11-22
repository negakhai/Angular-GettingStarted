import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starsWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    readonly fiveStarsWidth: number = 86;
    readonly singleStarWidth: number = this.fiveStarsWidth / 5;

    ngOnChanges(): void {
        this.starsWidth = this.rating * this.singleStarWidth;
    }

    onClick(): void {
        this.ratingClicked.emit(`A rating of ${this.rating} was clicked!`);
    }
}
