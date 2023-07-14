import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import {
    LabelPosition,
    LabelPositionsClasses,
    positionMap,
} from './input.model';

@Component({
    selector: 'aurora-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input()
    public set disabled(value: boolean) {
        if (value) {
            this.inputControl.disable();

            return;
        }

        this.inputControl.enable();
    }

    @Input() public placeholder = '';
    @Input() public labelText = '';
    @Input() public labelPosition: LabelPosition = 'left';
    @Input() public value = '';
    @Input() public type = '';

    @Output() public readonly unfocused = new EventEmitter<void>();

    @ViewChild('input') public input!: ElementRef;

    @HostBinding('attr.tabindex')
    public tabIndex = 0;

    public inputControl = new FormControl();

    private subscription!: Subscription;

    public get resultPositionClass(): LabelPositionsClasses {
        return positionMap.get(this.labelPosition) ?? 'default-position';
    }

    public ngOnInit(): void {
        this.writeValue(this.value);
        this.subscription = this.inputControl.valueChanges.subscribe(
            (value: Readonly<string>) => this.onChange(value)
        );
    }

    public blur(): void {
        this.onTouch();
        this.unfocused.emit();
    }

    public writeValue(value: string): void {
        this.inputControl.patchValue(value, { emitEvent: false });
    }

    public registerOnChange(fn: VoidFunction): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: VoidFunction): void {
        this.onTouch = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    @HostListener('focus')
    public onFocus(): void {
        this.input.nativeElement.focus();
    }

    private onChange = (value: Readonly<string>): void => {};

    private onTouch: VoidFunction = () => {};
}
