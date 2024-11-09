const sortByPriceLowToHigh = (arr) => {
    const newArr = [...arr].sort((a, b) => a.price - b.price); // Spread operator to create a copy
    console.log(newArr);
    console.log(newArr[0].price); // Log the price from the sorted array
    return newArr;
}

const sortByPriceHightToLow = (arr) => {
    const newArr = [...arr].sort((a, b) => b.price - a.price); // Spread operator to create a copy
    console.log(newArr);
    return newArr;
}

export { sortByPriceHightToLow, sortByPriceLowToHigh }
