import { Component, provide } from "@angular/core";
import { addProviders, async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { HomeComponent } from "./home";

const chai = require("chai");
const expect : Function = chai.expect;

describe("Home Component", () =>
{

    beforeEach(
        () =>
        {
            TestBed.configureTestingModule(
                {
                    declarations: [HomeComponent],
                    providers: [],
                    imports: []
                }
            );
        }
    );

    describe("Confirm component", () =>
        {
        beforeEach(
            async(
                () =>
                {
                    TestBed.compileComponents();
                }
            )
        );
        it("Should find the component content",
            async(() =>
                {
                let fixture = TestBed.createComponent(HomeComponent);
                fixture.detectChanges();
                let component = fixture.debugElement.nativeElement;
                expect(component.innerHTML).to.equal("<h1>This is the main page...</h1>");
            }
            )
        );
    }
    );

});
