import mongoose from "mongoose";
import { getDb } from "../Database/mongoUtil.js";

export function findStock() {
    console.log("FIND STOCK")
    return "FIND STOCK"
}

export function addStock() {

    /*
    var db = getDb()

    var myobj = { name: "Company Inc 111", address: "Highway 37" };

    db.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    */
    console.log("ADD STOCK")
    return "ADD STOCK"
}

export function bulkAddStock() {
    console.log("BULK ADD STOCK")
    return "BULK ADD STOCK"
}