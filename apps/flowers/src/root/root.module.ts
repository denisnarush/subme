import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RootComponent } from "./root.component";
import { RouterModule } from "@angular/router";

import { RootRoutes } from "./root.routes";

@NgModule({
    declarations: [RootComponent],
    imports: [BrowserModule, RouterModule.forRoot(RootRoutes)],
    providers: [],
    bootstrap: [RootComponent]
})
export class RootModule {}
