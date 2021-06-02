import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MyPublishPageRoutingModule} from './my-publish-routing.module';

import {MyPublishPage} from './my-publish.page';
import {PipeModule} from "../../pipe/pipe.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyPublishPageRoutingModule,
        PipeModule
    ],
    declarations: [MyPublishPage]
})
export class MyPublishPageModule {
}
