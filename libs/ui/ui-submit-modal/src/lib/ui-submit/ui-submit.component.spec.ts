import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UiSubmitComponent } from "./ui-submit.component";

describe("UiSubmitComponent", () => {
    let component: UiSubmitComponent;
    let fixture: ComponentFixture<UiSubmitComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiSubmitComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSubmitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
