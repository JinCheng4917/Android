import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PersonDetailPageRoutingModule} from './person-detail-routing.module';

import {PersonDetailPage} from './person-detail.page';
import {PipeModule} from "../../pipe/pipe.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipeModule,
        PersonDetailPageRoutingModule
    ],
    declarations: [PersonDetailPage]
})
export class PersonDetailPageModule {
}
