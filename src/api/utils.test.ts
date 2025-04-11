import { mapContent } from "./utils";
import { ContentType } from "@/types/contentTypes";


const mockContentArray = [
    {
        id: 1,
        adult: true,
        popularity: 123,
        name: "A Series",
        original_name: "A Series",
        backdrop_path: "test",
        media_type: "tv",
        first_air_date: "07-07-2003",
        origin_country: ["test"],
        overview: "test",
        poster_path: "test",
        genre_ids: [1],
        original_language: "test",
        vote_average: 1,
        vote_count: 1,
    },
    {
        id: 2,
        adult: true,
        popularity: 123,
        title: "A movie",
        original_title: "A movie",
        backdrop_path: "test",
        media_type: "movie",
        release_date: "07-07-2003",
        overview: "test",
        poster_path: "test",
        genre_ids: [1],
        original_language: "test",
        vote_average: 1,
        vote_count: 1,
        video: true,
    },
    {
        id: 3,
        adult: false,
        popularity: 20,
        name: "a person",
        original_name: "a person,",
        media_type: "person",
        gender: 0,
        known_for_department: "test",
        profile_path: "test"
    }
]

describe('mapContent', () => {
    it("should map an array of ContentType to CardContentType", () => {
        const result = mapContent(mockContentArray as ContentType[]);
        expect(Array.isArray(result)).toBe(true);
    })

    it("should return an empty array upon receiving one", ()=> {
        expect(Array.isArray(mapContent([]))).toBe([]);
    });

    it("should throw an error when not receiving any arguments", ()=> {
        //@ts-expect-error
        expect(Array.isArray(mapContent())).toThrow();
    })

    it("should throw an error when not receiving any arguments", ()=> {
        //@ts-expect-error
        expect(Array.isArray(mapContent(undefined))).toThrow();
    })


});