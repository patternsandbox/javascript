import CarBuilder from './index.js';

test('build a car with navigation', () => {
    const carWithNavigation = new CarBuilder.Builder("SUV")
        .withMake("Honda")
        .withModel("CR-V")
        .withCamera(false)
        .withNavigation(true)
        .build();

    expect(carWithNavigation.camera).toBeFalsy();
    expect(carWithNavigation.navigation).toBeTruthy();
});

test('build a car with camera', () => {
    const carWithNavigation = new CarBuilder.Builder("SUV")
        .withMake("Honda")
        .withModel("CR-V")
        .withCamera(true)
        .withNavigation(false)
        .build();

    expect(carWithNavigation.camera).toBeTruthy();
    expect(carWithNavigation.navigation).toBeFalsy();
});
