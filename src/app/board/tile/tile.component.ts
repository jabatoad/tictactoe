import {Component, Input, OnInit} from '@angular/core';
import {Tile} from "../../core/enums/tile";

@Component({
  selector: 'board-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass']
})
export class TileComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() figure: Tile = Tile.EMPTY
  @Input() col: number = 0
  @Input() row: number = 0

}
