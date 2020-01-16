import { CounterComponent } from "./counter.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;
  let counterElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement;
    counterElement = de.query(By.css(".counter")).nativeElement;
  });

  it("should display the number stored in counter variable", () => {
    expect(counterElement.textContent).toEqual(component.counter + "");
  });

  it("should call increment function on clicking increment button", () => {
    let increment = spyOn(component, "increment");
    let buttonElement: HTMLElement = de.query(By.css(".increment"))
      .nativeElement;
    buttonElement.click();
    expect(increment).toHaveBeenCalledTimes(1);
  });

  it("should increment counter by 1 on clicking increment button", () => {
    const initial = component.counter;
    component.increment();
    fixture.detectChanges();
    const current = component.counter;
    expect(current - 1).toEqual(initial);
  });

  it("should call decrement function on clicking decrement button", () => {
    let decrement = spyOn(component, "decrement");
    let buttonElement: HTMLElement = de.query(By.css(".decrement"))
      .nativeElement;
    buttonElement.click();
    expect(decrement).toHaveBeenCalledTimes(1);
  });

  it("should decrement counter by 1 on clicking decrement button", () => {
    const initial = component.counter;
    component.decrement();
    fixture.detectChanges();
    const current = component.counter;
    expect(current + 1).toEqual(initial);
  });

  it("should call reset function on clicking reset button", () => {
    let reset = spyOn(component, "reset");
    let buttonElement: HTMLElement = de.query(By.css(".reset")).nativeElement;
    buttonElement.click();
    expect(reset).toHaveBeenCalledTimes(1);
  });

  it("should reset counter to zero on clicking reset button", () => {
    component.reset();
    fixture.detectChanges();
    const current = component.counter;
    expect(current).toEqual(0);
  });
});
