class CarBuilder {
    constructor(build) {
        this.make = build.make;
        this.speed = build.speed;
        this.color = build.color;
    }
    static get Builder() {
        class Builder {
            constructor(make) {
                this.make = make;
            }
            withSpeed(speed) {
                this.speed = speed;
                return this;
            }
            withColor(color) {
                this.color = color;
                return this;
            }
            build() {
                return new CarBuilder(this);
            }
        }
        return Builder;
    }
}

// Usage
let carBuilder1 = new CarBuilder.Builder("Honda").withSpeed(100).withColor('white')
let car1 = carBuilder1.build();

console.log(car1)
