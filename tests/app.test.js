const {idOrganiser} = require("../app");

describe("App", () => {
    it("Simple array with unique id",()=>{
        const result = idOrganiser([{id: 1}, {id: 2}]);
        expect(result).toEqual([[{id: 1}, {id: 2}]]);
    });

    it("Simple array with repeating id",()=>{
        const result = idOrganiser([{id: 1}, {id: 1}, {id: 2}]);
        expect(result).toEqual([[{id: 1}, {id: 2}], [{id: 1}, {id: 2}]]);
    });

    it("Array with different and various repeating id",()=>{
        const result = idOrganiser([{id: 1}, {id: 1}, {id: 1}, {id: 2}, {id: 2}, {id: 3}, {id: 3}]);
        expect(result).toEqual([
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ],
            [ { id: 1 }, { id: 2 }, { id: 3 } ]
        ]);
    });

    it("Unordered array with different and repeating id",()=>{
        const result = idOrganiser([{id: 3},{id: 21},{id: 1},{id: 3},{id: 3},{id: 2},{id: 121},{id: 3}]);
        expect(result).toEqual([
            [ { id: 3 }, { id: 21 }, { id: 1 }, { id: 2 }, { id: 121 } ],
            [ { id: 3 }, { id: 21 }, { id: 1 }, { id: 2 }, { id: 121 } ],
            [ { id: 3 }, { id: 21 }, { id: 1 }, { id: 2 }, { id: 121 } ],
            [ { id: 3 }, { id: 21 }, { id: 1 }, { id: 2 }, { id: 121 } ]
        ]);
    });

    it("Array with wide repeating number and id as character",()=>{
        const result = idOrganiser([{id: 1},{id: 1},{id: 'a'},{id: 1},{id: 1},{id: 1},{id: 1},{id: 'a'}]);
        expect(result).toEqual([
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ],
            [ { id: 1 }, { id: 'a' } ]
        ]);
    });
});