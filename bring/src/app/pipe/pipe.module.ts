import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {StatusPipe} from './statusPipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    StatusPipe
  ],
  declarations: [StatusPipe]
})
export class PipeModule {}
