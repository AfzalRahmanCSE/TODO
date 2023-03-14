const index=require('./index')
const request=require('jest')

test('Whether server is running or not',async ()=>{
    const response = await request(index).get('/');
    expect(response.text).toEqual('Server is up and Running');
})