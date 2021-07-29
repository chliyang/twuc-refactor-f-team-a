class Movie {
    static CHILDREN = 2;
    static REGULAR = 0;
    static NEW_RELEASE = 1;

    constructor(title, priceCode) {
        this.title = title;
        this.priceCode = priceCode;
    }

    getPriceCode() {
        return this.priceCode;
    }

    setPriceCode(priceCode) {
        this.priceCode = priceCode;
    }

    getTitle() {
        return this.title;
    }
}

export default Movie;
