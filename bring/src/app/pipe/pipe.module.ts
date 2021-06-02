import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StatusPipe} from './statusPipe';
import {SexPipe} from "./SexPipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        StatusPipe,
        SexPipe
    ],
    declarations: [StatusPipe, SexPipe]
})
export class PipeModule {
}
