const server = require('../api/server')
const supertest = require('supertest')

const db =require('../database/connection')
const {hashing} = require('./users_helper')

describe('/api/users',()=>{
    // describe(' POST /register', ()=>{
    //     beforeEach(async () => {
    //         // trucate or empty the hobbits table
    //         await db("user").truncate();
    //     });

    //     it("should return 201 when passed correct data", async () => {
    //         const res = await supertest(server)
    //             .post("/api/users/register")
    //             .send( {username: 'newUser', password: hashing('passNew'), email: "new1@gmail.com"})

    //             expect(res.status).toBe(201)
    //     });

    //     it('should return JSON', async ()=>{
    //         const res = await supertest(server)
    //             .post("/api/users/register")
    //             .send( {username: 'newUser', password: hashing('passNew'), email: "new1@gmail.com"})

    //             expect(res.type).toMatch(/json/i)
    //     });

        
    // })

    describe(' POST /login', ()=>{
        it("should return 201 when passed correct data", async () => {
            const res = await supertest(server)
                .post("/api/users/login")
                .send({username: 'user1', password: 'pass123'})

                expect(res.status).toBe(201)
        })

        it("should return 401 when passed uncorrect  data", async () => {
            const res = await supertest(server)
                .post("/api/users/login")
                .send({username: 'samidddd', password: 'pass'})

                expect(res.status).toBe(401)
        })

        it("should return JASON", async () => {
            const res = await supertest(server)
            .post("/api/users/login")
            .send({username: 'user1', password: 'pass123'})

                expect(res.type).toMatch(/json/i)
        })


        it("should return token when passed  data", async () => {
            const res = await supertest(server)
            .post("/api/users/login")
            .send({username: 'user1', password: 'pass123'})

                expect(res.body).toHaveProperty('token')
        })
    })


})