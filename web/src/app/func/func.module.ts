import {NgModule} from '@angular/core';
import {GoodsSelectorComponent} from './selecter/goods-selector/goods-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StatusPipe} from './pipe/Status.pipe';
import {SexPipe} from './pipe/Sex.pipe';
import {RolePipe} from './pipe/Role.pipe';

@NgModule({
  declarations: [
    GoodsSelectorComponent,
    StatusPipe,
    SexPipe,
    RolePipe
  ],
  exports: [
    GoodsSelectorComponent,
    SexPipe,
    RolePipe,
    StatusPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: []
})
export class FuncModule {
}
