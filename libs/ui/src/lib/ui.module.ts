import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiHeaderModule } from "@s/ui/ui-header";
import { UiContentModule } from "@s/ui/ui-content";
import { UiFooterModule } from "@s/ui/ui-footer";
import { UiModalModule } from "@s/ui/ui-modal";
import { UiSliderModule } from "@s/ui/ui-slider";
import { UiSubmitModalModule } from "@s/ui/ui-submit-modal";
import { UiTabsModule } from "@s/ui/ui-tabs";
import { UiTabModule } from "@s/ui/ui-tab";
import { UiFieldsetModule } from "@s/ui/ui-fieldset";

@NgModule({
    imports: [CommonModule],
    exports: [
        UiHeaderModule,
        UiContentModule,
        UiFooterModule,
        UiModalModule,
        UiSliderModule,
        UiSubmitModalModule,
        UiTabsModule,
        UiTabModule,
        UiFieldsetModule
    ]
})
export class UiModule {}
