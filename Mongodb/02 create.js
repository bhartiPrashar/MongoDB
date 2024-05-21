try {
   db.products.insertOne( { item: "card", qty: 15 } );
} catch (e) {
   print (e);
};



try {
   db.products.insertOne(
       { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
       { writeConcern: { w : "majority", wtimeout : 100 } }
   );
} catch (e) {
   print (e);
}

db.inventory.insertMany
(
    { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
    { writeConcern: { w : "majority", wtimeout : 10000 } }
);

(
    { "item": "envelope", "qty": 101, type: "Self-Sealin" },
    { writeConcern: { w : "majorit", wtimeout : 1000 } }
);

(
    { "item": "envelop", "qty": 102, type: "Self-Seali" },
    { writeConcern: { w : "major", wtimeout : 100 } }
);

(
    { "item": "envelo", "qty": 103, type: "Self-Seal" },
    { writeConcern: { w : "majori", wtimeout : 10 } }
);


db.inventory.insertMany( [
    { _id: 10, item: "large box", qty: 20 },
    { _id: 11, item: "small box", qty: 55 },
    { _id: 12, item: "medium box", qty: 30 }
 ] );




6206872608
