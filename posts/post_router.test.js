const server = require('../api/server')
const supertest = require('supertest')

const db =require('../database/connection')


describe('api/posts', ()=> {
    //get all post
    describe('GET /', ()=> {
        it('should return status 200 when the call is successful', async()=>{
            const res = await supertest(server)
            .get('/api/posts')
            expect(res.status).toBe(200)
        })

        it('should return JSON', async()=>{
            const res = await supertest(server)
            .get('/api/posts')
            expect(res.type).toMatch(/json/i)
        })

        it('should return projects', async()=>{
            const res = await supertest(server)
            .get('/api/posts')
            expect(res.body).not.toBe(undefined)
        })
    })

    //get post by ID
    describe('GET /:id', ()=> {
        it('should return status 200 when the call is successful', async()=>{
            const res = await supertest(server)
            .get('/api/posts/1')
            expect(res.status).toBe(200)
        })

        it('should return JSON', async()=>{
            const res = await supertest(server)
            .get('/api/posts/1')
            expect(res.type).toMatch(/json/i)
        })
    })

    //add a post 
    // describe('POST /', ()=> {
    //     beforeEach(async () => {
    //         // trucate or empty the user table
    //         await db("post").truncate();
    //     });

    //     it('should return status 201 when passed correct data', async()=>{
    //         const res = await supertest(server)
    //         .post('/api/posts')
    //         .send({post_title: "the new post", post_content: 'new content', user_id: 1})

    //         expect(res.status).toBe(201)
    //     })

    //     it('should return JSON', async()=>{
    //         const res = await supertest(server)
    //         .post('/api/posts')
    //         .send({post_title: "the new post", post_content: 'new content', user_id: 1})
    //         expect(res.type).toMatch(/json/i)
    //     })
    // })

    // updating project information
    // describe('PUT /', ()=> {
    //     it('should return status 202 when passed correct data', async()=>{
    //         const res = await supertest(server)
    //         .put('/api/posts/1')
    //         .send({post_title: "the new updated"})

    //         expect(res.status).toBe(202)
    //     })

    //     it('should return JSON', async()=>{
    //         const res = await supertest(server)
    //         .put('/api/posts/1')
    //         .send({post_title: "the new updated"})
    //         expect(res.type).toMatch(/json/i)
    //     })
    // })

})