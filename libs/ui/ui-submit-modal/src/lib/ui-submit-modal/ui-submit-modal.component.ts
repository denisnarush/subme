import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: ".s-ui-submit-modal",
    templateUrl: "./ui-submit-modal.component.html",
    styleUrls: ["./ui-submit-modal.component.less"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSubmitModalComponent {}
