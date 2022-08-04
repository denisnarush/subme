import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiSubmitModalComponent } from "./ui-submit-modal/ui-submit-modal.component";

@NgModule({
    imports: [CommonModule],
    declarations: [UiSubmitModalComponent],
    exports: [UiSubmitModalComponent]
})
export class UiSubmitModalModule {}
