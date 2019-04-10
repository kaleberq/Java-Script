'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    number: { 
        type: String,
        require: true,
    },
    createData: { 
        type: Date,
        require: true,
        default: Date.now
    },
    status: { 
        type: String,
        require: true,
        enum: ['created','done'], /*olhe aqui*/
        default: 'created'
    },
    items: [{ 
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
});

module.exports = mongoose.model('Order', schema);