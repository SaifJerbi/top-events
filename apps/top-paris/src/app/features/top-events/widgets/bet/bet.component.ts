import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Outcome } from "@fdj/models";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'fdj-bet',
    templateUrl: './bet.component.html',
    styleUrls: ['bet.component.scss']
})
export class BetComponent{
    @Input() outcomes!: Outcome[];
}