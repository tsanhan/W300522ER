(function() {
    // DRY - Don't Repeat Yourself
    class JediKnight {
        constructor(name, age, isJedi) {
            this.name = name;
            this.age = age;
            this.isJedi = isJedi;
        }

        myName() {
            console.log(this.name, "lala");
        }
        calculationRelevantToAllChildren() {
            console.log('calculation');
        }
    }

    const ObiWan = new JediKnight('ObiWan', 30, true);
    const Yoda = new JediKnight('Yoda', 100, true);

    ObiWan.myName();
    Yoda.myName();

    // class ex:
    // * use this class, add a light saber color to the properties
    // * add a method to the class that will print the light saber color + " go's vvv sh sh sh..."

    
    // ES6 classes inheritance
    class JediMaster extends JediKnight {
        constructor(name, age, isJedi, lightSaberColor) {
            super(name, age, isJedi);
            this.lightSaberColor = lightSaberColor;
        }

        // override
        myName() {
            // super.myName();
            console.log(this.name);
        }

        newMethod() {
            console.log('new method');
        }
    }
    
    const jediMaster = new JediMaster('Luke', 30, true, 'blue');
    jediMaster.calculationRelevantToAllChildren();

    
    // ES6 classes inheritance exercise:
    // * create a new class called Sith
    // * Sith should inherit from JediKnight
    // * Sith should have a new property called "darkSide"
    // * Sith should have a new method called "strike" that will print "vvv sh sh sh..." +
        // * this.darkSide
    // * create a new Sith object and call the strike method
    
    class Sith extends JediKnight {
        constructor(name, age, isJedi, darkSide) {
            super(name, age, isJedi);
            this.darkSide = darkSide;
        }

        strike() {
            console.log('vvv sh sh sh...', this.darkSide);
        }
    }

    // * create a new class called Apprentice
    // * Apprentice should inherit from Sith
    // * Apprentice should have a new property called "master"
    // * Apprentice should have a new method called "strike" that will print "vvv sh sh sh..." +
        // * this.darkSide + " " + this.master

    class Apprentice extends Sith {
        constructor(name, age, isJedi, darkSide, master) {
            super(name, age, isJedi, darkSide);
            this.master = master;
        }

        strike() {
            super.strike();
            console.log(this.master);
        }
    }
    
    const apprentice = new Apprentice('Darth Vader', 30, true, 'red', 'Darth Sidious');
    apprentice.strike();
    apprentice.myName()

    // ES5 classes
    function JediKnight2(name, age, isJedi) {
        this.name = name;
        this.age = age;
        this.isJedi = isJedi;
    }

    JediKnight2.prototype.myName = function () {
        console.log(this.name);
    }
    
    
    const ObiWan2 = new JediKnight2('ObiWan', 30, true);

    // ES5 classes inheritance
    function JediMaster2(name, age, isJedi, lightSaberColor) {
        JediKnight2.call(this, name, age, isJedi);
        this.lightSaberColor = lightSaberColor;
    }

    JediMaster2.prototype = Object.create(JediKnight2.prototype);
    JediMaster2.prototype.constructor = JediMaster2;

    const jediMaster2 = new JediMaster2('Luke', 30, true, 'blue');
    // HW: Read about SOLID principles (JS)

    
})();