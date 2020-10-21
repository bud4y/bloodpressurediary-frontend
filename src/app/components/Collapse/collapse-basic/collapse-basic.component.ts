import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse-basic',
  templateUrl: './collapse-basic.component.html'
})
export class CollapseBasicComponent implements OnInit {
  @Input()
  displayedTitle: string;
  @Input()
  displayedText: string;
  public isCollapsed = true;

  ngOnInit(): void {
  }
}
