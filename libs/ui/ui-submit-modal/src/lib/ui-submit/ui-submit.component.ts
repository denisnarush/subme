import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: ".s-ui-submit",
    templateUrl: "./ui-submit.component.html",
    styleUrls: ["./ui-submit.component.less"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSubmitComponent {}
