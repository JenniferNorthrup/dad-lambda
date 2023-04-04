import { mockEvent } from "./__mocks__/testEvent.js";

const handler = async (event) => {
    console.log(JSON.stringify(event.body));
    ///DO STUFF
    console.log("WUT");

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            "myDad": event.body.dad
        }),
    };
    return response;
};

handler(mockEvent).then((result)=>{
    console.log("There was a result!");
    console.log("Result: ", JSON.stringify(result));
}).catch((err) => {
    console.error("There was an error");
    console.error("ERROR!!! ", JSON.stringify(err));
});

