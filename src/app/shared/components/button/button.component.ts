import { Component, ElementRef, Input } from '@angular/core';

export enum TypeButtonEnum {
  BASIC = 'mat-button',
  RAISED = 'mat-raised-button',
  STROKED = 'mat-stroked-button',
  FLAT = 'mat-flat-button',
  ICON = 'mat-icon-button',
  FAB = 'mat-fab',
  MINI_FAB = 'mat-mini-fab',
}

export enum ColorButtonEnum {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  WARN = 'warn',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() btnType = 'submit';
  @Input() displayType: TypeButtonEnum = TypeButtonEnum.FLAT;
  @Input() color: ColorButtonEnum = ColorButtonEnum.PRIMARY;
  @Input() text!: string;
  @Input() icon!: string;
  @Input() leftIcon!: string;
  @Input() rightIcon!: string;
  @Input() disabled = false;
  @Input() loading = false;

  constructor(elRef: ElementRef) {
    this._elementRef = elRef;
  }

  public typeButtonEnum = TypeButtonEnum;
  public _elementRef: ElementRef;
}
