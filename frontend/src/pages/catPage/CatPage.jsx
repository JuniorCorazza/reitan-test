import { useEffect, useState } from "react";
import { Button, Select, CatCardList } from "@/components";
import { catFilters, filterCats, sortCats } from "./util";
import axios from "axios"

export const CatPage = () => {
    const [cats, setCats] = useState([]);
    const [defaultCats, setDefaultCats] = useState([]);
    const [sortAndFilter, setSortAndFilter] = useState({ option: "none", filter: "none" });
    const [waitingText, setWaitingText] = useState("Loading cats... Prepare for cuteness overload");

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/data");
            if (response) {
                setCats(response.data.cats);
                setDefaultCats(response.data.cats);
            }
        } catch (error) {
            console.log(error);
            setWaitingText("Something went wrong, please reload the page to be bombarded with cats");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSortChanged = (option) => {
        setSortAndFilter({ ...sortAndFilter, option });
        let sortedCats;
        if (option === "none") {
            sortedCats = sortCats(filterCats(defaultCats, sortAndFilter.filter), option);
        } else {
            sortedCats = sortCats(cats, option);
        }
        setCats(sortedCats);
    };

    const handleFilterChanged = (filter) => {
        setSortAndFilter({ ...sortAndFilter, filter });
        setCats(filterCats(sortCats(defaultCats, sortAndFilter.option), filter));
    };

    const handleReset = () => {
        setCats(defaultCats)
        setSortAndFilter({ option: "none", filter: "none" });
    }

    return (
        <div className="bg-orange-100 flex flex-col items-center justify-center min-h-screen">
            {
                cats.length > 0 ? (
                    <div>
                        <div className="text-center">
                            <h2 className="font-semibold text-3xl p-6">How do you want your cat?</h2>
                            <div>
                                <div className="my-3">
                                    <p className="mb-2">Sort by cuteness</p>
                                    <div className="flex justify-center items-center">
                                        <Button
                                            selected={sortAndFilter.option === "none"}
                                            className="mr-3"
                                            onClick={() => handleSortChanged("none")}
                                            label="None"
                                        />
                                        <Button
                                            selected={sortAndFilter.option === "asc"}
                                            className="mr-3"
                                            onClick={() => handleSortChanged("asc")}
                                            label="Not Cute"
                                        />
                                        <Button
                                            selected={sortAndFilter.option === "desc"}
                                            onClick={() => handleSortChanged("desc")}
                                            label="Much Cute"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center mt-5">
                                    <p className="mb-2">
                                        Filter by fur type
                                    </p>
                                    <Select
                                        value={sortAndFilter.filter}
                                        onChange={(event) => handleFilterChanged(event.target.value)}
                                        items={catFilters}
                                    />
                                </div>
                                <div className="flex justify-center items-center my-8">
                                    <Button
                                        className={"bg-button-error hover:bg-button-error-hover"}
                                        onClick={handleReset}
                                        label="Reset"
                                    />
                                </div>
                            </div>
                        </div>

                        <CatCardList cats={cats} />
                    </div>
                ) : (
                    <p>{waitingText}</p>
                )
            }
        </div >
    );
};
