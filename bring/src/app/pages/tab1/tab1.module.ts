import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {OrderDetailPage} from "../order-detail/order-detail.page";
import {OrderDetailPageModule} from "../order-detail/order-detail.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        OrderDetailPageModule
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
}
