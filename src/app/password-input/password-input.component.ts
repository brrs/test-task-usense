import { Component } from '@angular/core';
import { StrengthIndicatorComponent, IndicatorStates } from './strength-indicator/strength-indicator.component';

@Component({
  selector: 'password-input',
  standalone: true,
  imports: [StrengthIndicatorComponent],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  currentState: IndicatorStates = IndicatorStates.Empty;

  changeState(state: IndicatorStates) {
    this.currentState = state;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const password = input.value;

    if (password.length == 0) {
      this.changeState(IndicatorStates.Empty);
    } else if (password.length < 8) {
      this.changeState(IndicatorStates.Short);

    } else if(this.isStrong(password)) {
      this.changeState(IndicatorStates.Strong);

    } else if (this.isMedium(password)) {
      this.changeState(IndicatorStates.Medium);

    } else if (this.isEasy(password)) {
      this.changeState(IndicatorStates.Easy);


    } else {
      console.log("I missed something :(")
    }

    console.log(password)
  }

  private isEasy(str: string) {
    const letters = /^[A-Za-z]+$/;
    const digits = /^\d+$/;
    const specialCharacters = /^[^A-Za-z\d\s]+$/;

    return letters.test(str) || digits.test(str) || specialCharacters.test(str);
  }

  private isMedium(str: string) {
    const lettersAndDigits = /(?=.*[A-Za-z])(?=.*\d)/;
    const lettersAndSpecialCharacters = /(?=.*[A-Za-z])(?=.*[^A-Za-z\d\s])/;
    const digitsAndSpecialCharacters = /(?=.*\d)(?=.*[^A-Za-z\d\s])/;

    return lettersAndDigits.test(str) ||
      lettersAndSpecialCharacters.test(str) ||
      digitsAndSpecialCharacters.test(str);
  }

  private isStrong(str: string) {
    const lettersDigitsSpecialCharacters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]).*$/;
    return lettersDigitsSpecialCharacters.test(str);
  }
}