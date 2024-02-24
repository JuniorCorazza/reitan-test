export const catFilters = [
    {
        key: 1,
        value: "none",
        label: "All",
    },
    {
        key: 2,
        value: "allergyFriendly",
        label: "Allergy friendly",
    },
    {
        key: 3,
        value: "allergyFur",
        label: "Causes nose drip",
    },
]

export const sortCats = (cats, sortBy) => {
    switch (sortBy) {
        case "desc":
            return [...cats].sort((a, b) => b.cutenessLevel - a.cutenessLevel);
        case "asc":
            return [...cats].sort((a, b) => a.cutenessLevel - b.cutenessLevel);
        case "none":
        default:
            return cats
    }
}

export const filterCats = (cats, filterType) => {
    switch (filterType) {
        case "allergyFriendly":
            return [...cats].filter((cat) => cat.allergyInducingFur === false)
        case "allergyFur":
            return [...cats].filter((cat) => cat.allergyInducingFur === true);
        case "none":
        default:
            return cats
    }
}