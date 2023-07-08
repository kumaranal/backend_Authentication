// // const assert = require('assert');

// // describe("Test2", () => {
// //     beforeEach(() => {
// //       console.log( "executes before every test" );
// //     });
      
// //     it("Is returning 4 when adding 2 + 3", () => {
// //     //   assert.equal(2 + 3, 4);
// //       expect(2+3).toEqual(5);

// //     });
  
// //     it("Is returning 8 when multiplying 2 * 4", () => {
// //       assert.equal(2*4, 8);
// //     });
// //   });

// const { User } =require('../models/loginModel') ;
// const express=require("express");
// const {loginfn,registrationfn}= require('../controllers/loginController')
// const mongoose=require('mongoose');
// const schema=mongoose.Schema;
// const router=express.Router()
// router.post('/login',loginfn)

// describe('Router', () => {
//   test('getById', async () => {
//     const user = new User({ name: 'John Doe',email: 'anak@gmail.com',password:'akdj',visible_password:'akdj' });
//     user.save();

//     const res = await request(router).post('/login');
//     expect(res.statusCode).toBe(200);
//     // expect(res.body).toEqual({ id: 1, name: 'John Doe' });
//   });

// //   test('getAll', async () => {
// //     const user1 = new User({ id: 1, name: 'John Doe' });
// //     user1.save();
// //     const user2 = new User({ id: 2, name: 'Jane Doe' });
// //     user2.save();

// //     const res = await request(router).get('/users');
// //     expect(res.statusCode).toBe(200);
// //     expect(res.body).toEqual([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
// //   });
// });
