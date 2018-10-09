describe ("Delete", function() {

  it ("putting a property to null is not enough", function() {
    let obj = {
      p1: 1,
      p2: 2
    };
    obj.p1 = __;        // set obj.p1 to null

    let a = "";
    for (let p in obj) {
      a += p;
    };

    expect(a).__;      // check that a still contains p1
    expect(a).__;      // check that a still contains p2
  });

  it ("putting a property to undefined is not enough", function() {
    let obj = {
      p1: 1,
      p2: 2
    };
    obj.p1 = __;        // set obj.p1 to undefined

    let a = "";
    for (let p in obj) {
      a += p;
    };

    expect(a).__;       // check that a still contains p1
    expect(a).__;       // check that a still contains p2
  });

  it ("only delete is enough", function() {
    let obj = {
      p1: 1,
      p2: 2
    };
    __ obj.p1;          // delete the property obj.p1

    let a = "";
    for (let p in obj) {
      a += p;
    };

    expect(a).__;       // check that a DOES NOT contains p1 anymore
    expect(a).__;       // check that a still contains p2
  });

});