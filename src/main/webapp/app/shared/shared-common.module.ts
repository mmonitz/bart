import { NgModule } from '@angular/core';

import { BartservSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BartservSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BartservSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BartservSharedCommonModule {}
