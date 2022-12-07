import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UiSubmitModalComponent } from "./ui-submit-modal.component";

describe("UiSubmitModalComponent", () => {
    let component: UiSubmitModalComponent;
    let fixture: ComponentFixture<UiSubmitModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiSubmitModalComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSubmitModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // #99
    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("submit should be disabled when form is invalid", () => {
        expect(component).toBeFalsy();
    });

    it("submit should be disabled after click", () => {
        expect(component).toBeFalsy();
    });

    it("submit should be enabled after data was submitted as error", () => {
        expect(component).toBeFalsy();
    });

    it("form should be disabled after click on submit", () => {
        expect(component).toBeFalsy();
    });

    it("form should be enabled after data was submitted as error", () => {
        expect(component).toBeFalsy();
    });

    it("component should be deactivate after data was submitted as successful", () => {
        expect(component).toBeFalsy();
    });
});
