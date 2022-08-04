import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiSubmitComponent } from "./ui-submit/ui-submit.component";

@NgModule({
    imports: [CommonModule],
    declarations: [UiSubmitComponent],
    exports: [UiSubmitComponent]
})
export class UiSubmitModalModule {}
