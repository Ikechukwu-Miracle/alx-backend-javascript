/* eslint-disbable */
export default function updateUniqueItems(groceriesList) {
    if (!(groceriesList instanceof Map)) {
        throw new Error("Cannot process");
    }

    groceriesList.forEach((val, key) => {
        if (val === 1) {
          groceriesList.set(key, 100);
        }
      });
    
      return groceriesList;
}
