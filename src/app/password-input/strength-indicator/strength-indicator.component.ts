import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum IndicatorStates {
  Empty = "empty",
  Short = "short",
  Easy = "easy",
  Medium = "medium",
  Strong = "strong"
}

@Component({
  selector: 'strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-indicator.component.html',
  styleUrl: './strength-indicator.component.css'
})

export class StrengthIndicatorComponent {
  @Input() state!: IndicatorStates;

  public first: String = "gray";
  public second: String = "gray";
  public third: String = "gray";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['state']) {
      switch (this.state) {
        case IndicatorStates.Empty: {
          this.first = "gray";
          this.second = "gray";
          this.third = "gray";
          break;
        }
        case IndicatorStates.Short: {
          this.first = "red";
          this.second = "red";
          this.third = "red";
          break;
        }
        case IndicatorStates.Easy: {
          this.first = "red";
          this.second = "gray";
          this.third = "gray";
          break;
        }
        case IndicatorStates.Medium: {
          this.first = "yellow";
          this.second = "yellow";
          this.third = "gray";
          break;
        }
        case IndicatorStates.Strong: {
          this.first = "green";
          this.second = "green";
          this.third = "green";
          break;
        }
        default: {
          this.first = "gray";
          this.second = "gray";
          this.third = "gray";
          break;
        }
      }
    }
  }
}
