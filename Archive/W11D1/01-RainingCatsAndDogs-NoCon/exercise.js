var dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

var cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

dog.makeNoise();
cat.makeNoise();