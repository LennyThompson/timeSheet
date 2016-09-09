"use strict";
var testing_1 = require("@angular/core/testing");
var home_1 = require("./home");
var chai = require("chai");
var expect = chai.expect;
describe("Home Component", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [home_1.HomeComponent],
            providers: [],
            imports: []
        });
    });
    describe("Confirm component", function () {
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.compileComponents();
        }));
        it("Should find the component content", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(home_1.HomeComponent);
            fixture.detectChanges();
            var component = fixture.debugElement.nativeElement;
            expect(component.innerHTML).to.equal("<h1>This is the main page...</h1>");
        }));
    });
});
//# sourceMappingURL=home-spec.js.map