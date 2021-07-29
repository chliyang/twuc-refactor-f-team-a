import Movie from "./Movie";

class Customer {
    constructor(name) {
        this.name = name;
        this.rentals = []
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    getName() {
        return this.name;
    }

    statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this.getName()}\n`;
        for (let i = 0; i < this.rentals.length; i++) {
            let thisAmount = 0;
            const each = this.rentals[i];
            //determine amounts for each line
            switch (each.getMovie().getPriceCode()) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (each.getDaysRented() > 2) {
                        thisAmount += (each.getDaysRented() - 2) * 1.5;
                    }
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.getDaysRented() * 3;
                    break
                case Movie.CHILDREN:
                    thisAmount += 1.5;
                    if (each.getDaysRented() > 3) {
                        thisAmount += (each.getDaysRented() - 3) * 1.5;
                    }
                    break;
            }
            // add frequent renter points
            frequentRenterPoints++;
            // add bonus for a two day new release rental
            if ((each.getMovie().getPriceCode() === Movie.NEW_RELEASE) && each.getDaysRented() > 1) {
                frequentRenterPoints++;
            }

            //show figures for this rental
            result += `\t${each.getMovie().getTitle()}\t${thisAmount}\n`;

            totalAmount += thisAmount;
        }

        //add footer lines result += "Amount
        result += `Amount owed is ${totalAmount}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points`;

        return result;
    }
}

export default Customer;
