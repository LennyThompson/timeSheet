import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { HomeComponent }  from "./components/home/home";
import {FirebaseModule} from "./services/firebase/index";

@NgModule({
    imports:      [ BrowserModule, FirebaseModule ],
    declarations: [ HomeComponent ],
    bootstrap:    [ HomeComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

