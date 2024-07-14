// Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create 
// different methods
// 2. Create a Dog and Cat child class from the Animal Class.

// Level 2

// Override the method you create in Animal class

// Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, 
// median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency 
// distribution of the sample. You can create a class called Statistics and create all the 
// functions which do statistical calculations as method for the Statistics class. 
// Check the output below.

// Animal class
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    // Method to display animal details
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
}

// Dog subclass
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}, Breed: ${this.breed}`;
    }

    // Additional method specific to Dog
    bark() {
        return `${this.name} is barking!`;
    }
}

// Cat subclass
class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) {
        super(name, age, color, legs);
        this.isIndoor = isIndoor;
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `${super.displayInfo()}, Indoor: ${this.isIndoor}`;
    }

    // Additional method specific to Cat
    meow() {
        return `${this.name} is meowing!`;
    }
}

// Example usage
const dog = new Dog('Buddy', 3, 'Brown', 4, 'Golden Retriever');
console.log(dog.displayInfo());
console.log(dog.bark());

const cat = new Cat('Whiskers', 2, 'White', 4, true);
console.log(cat.displayInfo());
console.log(cat.meow());
class Statistics {
    constructor(data) {
        this.data = data;
    }

    // Helper methods
    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    mean() {
        return this.sum() / this.data.length;
    }

    median() {
        const sorted = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        }
        return sorted[mid];
    }

    mode() {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];
        for (const num of this.data) {
            frequency[num] = (frequency[num] || 0) + 1;
            if (frequency[num] > maxFreq) {
                maxFreq = frequency[num];
            }
        }
        for (const key in frequency) {
            if (frequency[key] === maxFreq) {
                modes.push(Number(key));
            }
        }
        return modes;
    }

    range() {
        return Math.max(...this.data) - Math.min(...this.data);
    }

    variance() {
        const mean = this.mean();
        return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.data.length;
    }

    stdDeviation() {
        return Math.sqrt(this.variance());
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    count() {
        return this.data.length;
    }

    percentile(p) {
        const sorted = [...this.data].sort((a, b) => a - b);
        const index = Math.ceil(p / 100 * sorted.length) - 1;
        return sorted[index];
    }

    frequencyDistribution() {
        const frequency = {};
        for (const num of this.data) {
            frequency[num] = (frequency[num] || 0) + 1;
        }
        return frequency;
    }
}

// Example usage
const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const stats = new Statistics(data);

console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Range:', stats.range());
console.log('Variance:', stats.variance());
console.log('Standard Deviation:', stats.stdDeviation());
console.log('Min:', stats.min());
console.log('Max:', stats.max());
console.log('Count:', stats.count());
console.log('Percentile (90th):', stats.percentile(90));
console.log('Frequency Distribution:', stats.frequencyDistribution());

