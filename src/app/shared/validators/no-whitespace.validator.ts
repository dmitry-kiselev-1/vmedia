import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const isWhitespace = (control && control.value && control.value.toString() || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {NoWhitespace: {value: 'Whitespace'}};
  };
}
